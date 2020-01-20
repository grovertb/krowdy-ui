import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'

export const styles = theme => ({
  audioContainer:{
    background:theme.palette.primary[500],
    borderRadius:'60px',
    height:'50px',
    padding:'5px',
    width:'60%'
  },
  canvas:{
  }
})

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



const AudioRecorder = props => {

	const {
		classes
	} = props 

	return (
    <div className={classes.audioContainer}>
      <div id='audio-box'></div>
      <canvas className={classes.canvas}></canvas>
      {/* <audio controls='controls'>
      <source src='track.ogg' type='audio/ogg' />
      <source src='track.mp3' type='audio/mpeg' />
      </audio> */}
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