import React from 'react'
import { AudioRecorder } from '@krowdy-ui/views'
import { Pause, PlayCircleFilled, Mic, Stop, Delete } from '@material-ui/icons'

export default function () {
  return (
    <div style={{
      width: '75%'
    }}>
      <AudioRecorder
        delete={() => <Delete />}
        onBlobUrl={url => {
          console.log(url)
        }}
        pause={() => <Pause />}
        play={() => <PlayCircleFilled />}
        record={() => <Mic />}
        spectroActiveColor='white'
        spectroPassiveColor='grey'
        stop={() => <Stop />} />
    </div>
  )
}
