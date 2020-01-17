import React from 'react'
import { HeaderTask } from '@krowdy-ui/views'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export default function () {
  const titleHeader = 'Video Cuestionario'
  const arrowBackIcon = <ArrowBackIcon style={{ height: 18, width: 18 }} />
  const titleTask = 'Titulo de video entrevista'
  const numberCandidates = 10
  const stageIndex = 0
  const id = null
  const showInputName = true
  const checkbox = false
  const showButtonsRight = true
  const isDraft = true

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: 400,
      justifyContent: 'space-evenly',
      margin: '50px',
      width: 'auto'
    }}>
      <div>
        <HeaderTask
          isDraft={true}
          checkbox={checkbox}
          showButtonsRight={showButtonsRight}
          showInputName={showInputName}
          arrowBackIcon={arrowBackIcon}
          titleHeader={titleHeader}
          titleTask={titleTask}
          numberCandidates={numberCandidates}
          stageIndex={stageIndex}
          id={null}
        />
      </div>
      <div>
        <HeaderTask
          isDraft={false}
          checkbox={checkbox}
          showButtonsRight={showButtonsRight}
          showInputName={showInputName}
          arrowBackIcon={arrowBackIcon}
          titleHeader={titleHeader}
          titleTask={titleTask}
          numberCandidates={numberCandidates}
          stageIndex={stageIndex}
          id={1}
        />
      </div>
    </div >

  )
}