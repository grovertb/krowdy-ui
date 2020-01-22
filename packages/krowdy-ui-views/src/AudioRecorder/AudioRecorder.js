import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
//import clsx from 'clsx'

export const styles = theme => ({
  audioContainer: {
    background: theme.palette.primary[500],
    borderRadius: 60,
    height: 50,
    padding: 5,
    width: '60%'
  },

})

const HOOK_SVG = 'M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z'
const HOOK_PATH = new Path2D(HOOK_SVG)
const SCALE = 2
const OFFSET = 80

function draw(ctx, location) {
  ctx.fillStyle = 'deepskyblue'
  ctx.shadowColor = 'dodgerblue'
  ctx.shadowBlur = 20
  ctx.save()
  ctx.scale(SCALE, SCALE)
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET)
  ctx.fill(HOOK_PATH)
  ctx.restore()
}

const AudioRecorder = props => {
  const {
    classes
  } = props

  const canvasRef = React.useRef(null)

  return (
    <div className={classes.audioContainer}>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={e => {
          const canvas = canvasRef.current
          const ctx = canvas.getContext('2d')
          draw(ctx, { x: e.clientX, y: e.clientY })
        }}
      />
    </div>
  )
}

AudioRecorder.propTypes = {
  classes: PropTypes.object,
}

AudioRecorder.muiName = 'AudioRecorder'

export default withStyles(styles, { name: 'KrowdyAudioRecorder' })(AudioRecorder)