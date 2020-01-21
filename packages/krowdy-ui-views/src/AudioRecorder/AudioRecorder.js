import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'

export const styles = theme => ({
  audioContainer: {
    background: theme.palette.primary[500],
    borderRadius: '60px',
    height: '50px',
    padding: '5px',
    width: '60%'
  },
  bar:{
    animation:'bar 0ms -1000ms linear infinite alternate running',     
    backgroundColor:'white',
    display:'block',
    textIndent:'-9999px',
    top:'13px',
    width:'3px'
    },
  bar0:{
    animationDuration: '337ms',
    height: '25%',
    left:'7px',
    },
  bar1:{
    animationDuration: '321ms',
    height: '50%',
    left:'16px',
    },
  bar2:{
    animationDuration: '353ms',
    height: '75%',
    left:'25px',
    },
  bar3:{
    animationDuration: '341ms',
    height: '100%',
    left:'34px',
    },
  bar4:{
    animationDuration: '327ms',
    height: '125%',
    left:'42px',
    },
  musicBar: {
    alignItems:' center',
    backgroundColor:'ffffff', 
    borderRadius:'10px',
    display:'flex',
    height:' 40px',
    justifyContent: 'space-between',
    margin:'50px auto',
    position:'relative',
},
})

const AudioRecorder = props => {
  const {
    classes
  } = props

 // const [bars, setBars] = React.useState([])
  return (
    <div className={classes.audioContainer}>
      <div className={classes.musicBar}>
        <span key={'1'} className={clsx(classes.bar,classes['bar0'])} style={{left:'0px'}}/>
        <span key={'2'} className={clsx(classes.bar,classes['bar1'])} style={{left:'7px'}}/>
        <span key={'3'} className={clsx(classes.bar,classes['bar2'])} style={{left:'14px'}}/>
        <span key={'4'} className={clsx(classes.bar,classes['bar3'])} style={{left:'21px'}}/>
        <span key={'5'} className={clsx(classes.bar,classes['bar4'])} style={{left:'28px'}}/>
    </div>
    </div>
  )
}

AudioRecorder.propTypes = {
  classes: PropTypes.object,
}

AudioRecorder.muiName = 'AudioRecorder'

export default withStyles(styles, { name: 'KrowdyAudioRecorder' })(AudioRecorder)