import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'

export const styles = theme => ({
  audioContainer: {
    background: theme.palette.primary[500],
    borderRadius: '60px',
    height: '50px',
    padding: '5px',
    width: '60%'
  },
  canvas: {
  }
})
const HOOK_SVG = 'M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z'
const HOOK_PATH = new Path2D(HOOK_SVG)
const SCALE = 1.5

function draw(ctx, location, n = 10) {

  ctx.fillStyle = 'white'
  ctx.shadowColor = 'white'
  ctx.save()
  ctx.scale(SCALE, SCALE)

  //fillRect( x, y, width, height ) // Explanation of the parameters below
  //ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
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
          draw(ctx, canvas)
        }}
      />
    </div>
  )
}

AudioRecorder.propTypes = {
  classes: PropTypes.object,
  fullName: PropTypes.string,
  imageAvatar: PropTypes.node,
}

AudioRecorder.muiName = 'AudioRecorder'

export default withStyles(styles, { name: 'KrowdyAudioRecorder' })(AudioRecorder)