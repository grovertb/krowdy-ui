import React from 'react'
import PropTypes from 'prop-types'
import MicRecorder from 'mic-recorder-to-mp3'
import { withStyles } from '@krowdy-ui/styles'
import Timer from 'react-compound-timer'

const Mp3Recorder = new MicRecorder({ bitRate: 128 })

export const styles = theme => ({
  audioContainer: {
    background  : theme.palette.primary[500],
    borderRadius: '60px',
    height      : '50px',
    padding     : '5px',
    width       : '75%'
  },
  canvas: {
  }
})

const withTimer = timerProps => WrappedComponent => wrappedComponentProps => (
  <Timer {...timerProps}>
    {timerRenderProps => <WrappedComponent {...wrappedComponentProps} timer={timerRenderProps} />}
  </Timer>
)

/* function frameLooper(){
	window.webkitRequestAnimationFrame(frameLooper)
	const fbc_array = new Uint8Array(analyser.frequencyBinCount)
  analyser.getByteFrequencyData(fbc_array)
  ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear the canvas
	ctx.fillStyle = '#00CCFF' // Color of the bars
	bars = 100
	for (var i = 0; i < bars; i++) {
		bar_x = i * 3
		bar_width = 2
		bar_height = -(fbc_array[i] / 2)
		ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
	} */

let interval = null

const getLimitDate = (secs) => {
  let rawDate = new Date(null)
  rawDate.setSeconds(secs)

  return rawDate.toISOString().substr(14,5)
}

const AudioRecorder = props => {
  const {
    classes,
    timer: {
      start,
      // resume,
      // pause,
      stop,
      reset,
      // timerState,
      getTime
    }
  } = props

  const [ /* recording */, setRecording ] = React.useState(false)
  const [ blobURL, setBlobURL ] = React.useState('')
  const [ blocked, setBlocked ] = React.useState(false)
  const [ ctx, setCtx ] = React.useState(null)
  const [ time, setTime ] = React.useState(0)
  // const [ currentTime, setCurrentTime ] = React.useState(0)

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
    let i = 15
    let x = 0
    while (limit - 30 > i) {
      x += 6.92
      drawStick(ctx, i, x, color)
      i += 2
    }
  }, [])

  const loopFrames = (lapse) => {
    // let y = 30
    let i = 15
    let x = 0
    audio.current.play()
    interval = setInterval(() => {
      console.log(getTime(), lapse * 1000)
      if(getTime() >= lapse * 1000) {
        _handleStop()
        clearInterval(interval)
      } else {
        if(canvas && canvas.current && canvas.current.height) {
          if(canvas.current.height - 30 > i) {
            x += 6.92
            drawStick(ctx, i, x, 'white')
            i += 2
          } else {
            _handleStop()
            clearInterval(interval)
          }
        } else {
          console.log('stop', interval)
          _handleStop()
          clearInterval(interval)
        }
      }
    }, lapse * 1000 / ((canvas.current.height - 45) / 2))
  }

  const updateCanvas = React.useCallback(() => {
    const ctx: CanvasRenderingContext2D = canvas.current.getContext('2d')
    setCtx(ctx)
    drawSticks(ctx, canvas.current.height, 'grey')
  }, [ drawSticks ])

  const _handleStart = async () => {
    if(blocked)
      console.log('Permission Denied')
    else
      try {
        setBlobURL(null)
        setTime(0)
        drawSticks(ctx, canvas.current.height, 'grey')
        loopFrames(120)
        await Mp3Recorder.start()
        console.log('start')
        setRecording(true)
        start()
      } catch (error) {
        console.error(error)
      }
  }

  const _handleStop = async () => {
    try {
      const [ /* buffer */, blob ] = await Mp3Recorder.stop().getMp3()
      const blobURL = URL.createObjectURL(blob)
      console.log('stop', blobURL)
      drawSticks(ctx, canvas.current.height, 'grey')
      stop()
      reset()
      clearInterval(interval)
      setBlobURL(blobURL)
      setRecording(false)
    } catch (error) {
      console.error(error)
    }
  }

  const _handlePlay = () => {
    drawSticks(ctx, canvas.current.height, 'grey')
    loopFrames(time)
    start()
  }

  React.useEffect(() => {
    updateCanvas()
  }, [ updateCanvas ])

  React.useEffect(() => {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted')
        setBlocked(false)
      },
      () => {
        console.log('Permission Denied')
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
    <div>
      <div id='audio-box'></div>
      <canvas className={classes.audioContainer} ref={canvas}></canvas>
      <audio
        controls='controls' ref={audio} src={blobURL}
        style={{
          height    : 0,
          visibility: 'hidden',
          width     : 0
        }} />
      <div>
        <Timer.Minutes />
        <span>:</span>
        <Timer.Seconds />
        <span>
              /
        </span>
        <span>{getLimitDate(time ? time : 120)}</span>
      </div>
      <button onClick={_handleStart}>Grabar</button>
      <button onClick={_handleStop}>Parar</button>
      <button onClick={_handlePlay}>Reproducir</button>
      {/* <audio controls='controls'>
      <source src='track.ogg' type='audio/ogg' />
      <source src='track.mp3' type='audio/mpeg' />
      </audio> */}
    </div>
  )
}

AudioRecorder.propTypes = {
  classes    : PropTypes.object,
  fullName   : PropTypes.string,
  imageAvatar: PropTypes.node
}

AudioRecorder.muiName = 'AudioRecorder'

export default withStyles(styles, { name: 'KrowdyAudioRecorder' })(withTimer({
  formatValue     : (value) => `${(value < 10 ? `0${value}` : value)}`,
  startImmediately: false
})(AudioRecorder))
