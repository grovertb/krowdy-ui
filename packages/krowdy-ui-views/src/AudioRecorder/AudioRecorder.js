import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import MicRecorder from 'mic-recorder-to-mp3'
import { IconButton } from '@krowdy-ui/core'
import { withStyles } from '@krowdy-ui/styles'
import Timer from 'react-compound-timer'

const Mp3Recorder = new MicRecorder({ bitRate: 128 })

const SPECTRO_PASSIVE_COLOR = 'grey'
const SPECTRO_ACTIVE_COLOR = 'white'

const TIME_RECORD = 120

const INCREMENT_STYLE = 6.92

const PADDING_LEFT = 15
const PADDING_RIGHT = 15
// position
const X_POSITION = PADDING_LEFT
const Y_SIZE = 0

export const styles = (theme) => ({
  audio: {
    height    : 0,
    visibility: 'hidden',
    width     : 0
  },
  barContainer: {
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'row',
    position     : 'relative',
    width        : 'calc(100% - 230px)'
  },
  button: {
    color     : theme.palette.primary['contrastText'],
    fontWeight: 'bold',
    left      : 10,
    position  : 'absolute'
  },
  canvas: {
    background  : theme.palette.primary[500],
    borderRadius: 60,
    height      : 50,
    padding     : 5,
    width       : '100%'
  },
  container: {
    display      : 'flex',
    flexDirection: 'row'
  },
  counter: {
    color     : theme.palette.primary['contrastText'],
    fontWeight: 'bold',
    position  : 'absolute',
    right     : 26
  }
})

const withTimer = timerProps => WrappedComponent => wrappedComponentProps => (
  <Timer {...timerProps}>
    {timerRenderProps => <WrappedComponent {...wrappedComponentProps} timer={timerRenderProps} />}
  </Timer>
)

let interval = null

const getLimitDate = (secs) => {
  let rawDate = new Date(null)
  rawDate.setSeconds(secs)

  return rawDate.toISOString().substr(14, 5)
}

const AudioRecorder = props => {
  const {
    classes,
    pause: PauseIcon,
    play: PlayIcon,
    record: RecordIcon,
    stop: StopIcon,
    'delete': DeleteIcon,
    timer: {
      start,
      pause,
      stop,
      reset,
      // timerState,
      getTime
    },
    onBlobUrl = () => {},
    spectroActiveColor = SPECTRO_ACTIVE_COLOR,
    spectroPassiveColor = SPECTRO_PASSIVE_COLOR,
    onStatus = () => {},
    classNameCanvas
  } = props

  const [ blobURL, setBlobURL ] = React.useState('')
  const [ blocked, setBlocked ] = React.useState(false)
  const [ ctx, setCtx ] = React.useState(null)
  const [ time, setTime ] = React.useState(0)
  const [ type, setType ] = React.useState('record')
  const [ currentTime, setCurrentTime ] = React.useState({ i: X_POSITION, x: Y_SIZE })

  const canvas = React.useRef()
  const audio = React.useRef()

  const drawStick = (ctx, i, x, color) => {
    const cut = canvas.current.height * Math.abs(Math.sin(x))
    ctx.fillStyle = color
    ctx.fillRect(i * 2, (canvas.current.height - cut) / 2, 2, cut)
  }

  const drawSticks = React.useCallback((ctx, limit, color, lazy) => {
    if(!lazy)
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
    let i = X_POSITION
    let x = Y_SIZE
    while (limit - (PADDING_LEFT + PADDING_RIGHT) > i) {
      x += INCREMENT_STYLE
      drawStick(ctx, i, x, color)
      i += 2
    }
  }, [])

  const loopFrames = (lapse, i = X_POSITION, x = Y_SIZE) => {
    interval = setInterval(() => {
      if(getTime() >= lapse * 1000) {
        _handleStop()
        clearInterval(interval)
        setCurrentTime({ i: X_POSITION, x: Y_SIZE })
      } else {
        if(canvas && canvas.current && canvas.current.height) {
          if(canvas.current.height - (PADDING_LEFT + PADDING_RIGHT) > i) {
            x += INCREMENT_STYLE
            drawStick(ctx, i, x, spectroActiveColor)
            i += 2
            setCurrentTime({ i, x })
          } else {
            _handleStop()
            clearInterval(interval)
            setCurrentTime({ i: X_POSITION, x: Y_SIZE })
          }
        } else {
          _handleStop()
          clearInterval(interval)
          setCurrentTime({ i: X_POSITION, x: Y_SIZE })
        }
      }
    }, lapse * 1000 / ((canvas.current.height - (PADDING_LEFT + PADDING_RIGHT + PADDING_RIGHT)) / 2))
  }

  const changeType = (type) => {
    setType(type)
    onStatus(type)
  }

  const updateCanvas = React.useCallback(() => {
    const ctx = canvas.current.getContext('2d')
    setCtx(ctx)
    drawSticks(ctx, canvas.current.height, spectroPassiveColor)
  }, [ drawSticks, spectroPassiveColor ])

  const _handleRecord = async () => {
    if(!blocked)
      try {
        setBlobURL('')
        setTime(0)
        drawSticks(ctx, canvas.current.height, spectroPassiveColor)
        loopFrames(TIME_RECORD)
        await Mp3Recorder.start()
        changeType('stop')
        start()
      } catch (error) {
        console.error(error)
      }
    else
      console.error('Permission Denied')
  }

  const _handlePause = () => {
    audio.current.pause()
    pause()
    clearInterval(interval)
    changeType('play')
  }

  const _handleStop = async () => {
    try {
      const [ buffer, blob ] = await Mp3Recorder.stop().getMp3()
      const blobURL = URL.createObjectURL(blob)
      onBlobUrl({ blob, blobURL, buffer })
      changeType('play')
      drawSticks(ctx, canvas.current.height, spectroPassiveColor)
      stop()
      reset()
      clearInterval(interval)
      setCurrentTime({ i: X_POSITION, x: Y_SIZE })
      setBlobURL(blobURL)
    } catch (error) {
      console.error(error)
    }
  }

  const _handlePlay = () => {
    const { i, x } = currentTime
    if(i === X_POSITION || x === 0)
      drawSticks(ctx, canvas.current.height, spectroPassiveColor)
    audio.current.play()
    changeType('pause')
    loopFrames(time, i, x)
    setCurrentTime({ i: X_POSITION, x: Y_SIZE })
    start()
  }

  const _handleDelete = () => {
    changeType('record')
    setBlobURL('')
    setTime(0)
    clearInterval(interval)
    setCurrentTime({ i: X_POSITION, x: Y_SIZE })
    stop()
    reset()
    drawSticks(ctx, canvas.current.height, spectroPassiveColor)
  }

  React.useEffect(() => {
    updateCanvas()
  }, [ updateCanvas ])

  React.useEffect(() => {
    navigator.getUserMedia({ audio: true },
      () => {
        setBlocked(false)
      },
      () => {
        setBlocked(true)
      },
    )
  }, [])

  React.useEffect(() => {
    audio.current.onloadedmetadata = () => {
      setTime(audio.current.duration)
    }
  }, [ blobURL ])

  return (
    <div className={classes.container}>
      <div className={classes.barContainer}>
        <canvas className={clsx(classes.canvas, classNameCanvas)} ref={canvas}></canvas>
        <audio
          className={classes.audio} controls='controls' ref={audio}
          src={blobURL} />
        <div className={classes.button}>
          {type === 'record' ? (
            <IconButton color='inherit' onClick={_handleRecord} variant='contained'>
              <RecordIcon />
            </IconButton>
          ) : type === 'play' ? (
            <IconButton color='inherit' onClick={_handlePlay} variant='contained'>
              <PlayIcon />
            </IconButton>
          ) : type === 'pause' ? (
            <IconButton color='inherit' onClick={_handlePause} variant='contained'>
              <PauseIcon />
            </IconButton>
          ) : type === 'stop' ? (
            <IconButton color='inherit' onClick={_handleStop} variant='contained'>
              <StopIcon />
            </IconButton>
          ) : (
            <IconButton color='inherit' onClick={_handleRecord} variant='contained'>
              <RecordIcon />
            </IconButton>
          )}
        </div>
        <div className={classes.counter}>
          <Timer.Minutes />
          <span>:</span>
          <Timer.Seconds />
          <span>
            /
          </span>
          <span>{getLimitDate(time ? time : TIME_RECORD)}</span>
        </div>
      </div>
      {
        blobURL && (
          <IconButton color='error' onClick={_handleDelete} variant='contained'>
            <DeleteIcon />
          </IconButton>
        )
      }
    </div>
  )
}

AudioRecorder.propTypes = {
  classNameCanvas    : PropTypes.string,
  classes            : PropTypes.object,
  'delete'           : PropTypes.func.isRequired,
  onBlobUrl          : PropTypes.func,
  onStatus           : PropTypes.func,
  pause              : PropTypes.func.isRequired,
  play               : PropTypes.func.isRequired,
  record             : PropTypes.func.isRequired,
  spectroActiveColor : PropTypes.string,
  spectroPassiveColor: PropTypes.string,
  stop               : PropTypes.func.isRequired
}

AudioRecorder.muiName = 'AudioRecorder'

export default withStyles(styles, { name: 'AudioRecorder' })(withTimer({
  formatValue     : (value) => `${(value < 10 ? `0${value}` : value)}`,
  startImmediately: false
})(AudioRecorder))
