import React from 'react'
import { HeaderTask } from '@krowdy-ui/views'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export default function () {
  const arrowBackIcon = <ArrowBackIcon style={{ height: 18, width: 18 }} />
  const titleTask = 'Titulo de video entrevista'
  const numberCandidates = 10
  const stageIndex = 0
  const checkbox = false

  return (
    <div style={{
      display       : 'flex',
      flexDirection : 'column',
      height        : 400,
      justifyContent: 'space-evenly',
      margin        : '50px',
      width         : 'auto'
    }}>
      <div>
        <h3>ShowButtonRight: false </h3>
        <HeaderTask
          _id={null}
          arrowBackIcon={arrowBackIcon}
          checkbox={checkbox}
          isDraft={false}
          numberCandidates={numberCandidates}
          showButtonsRight={false}
          showInputName={false}
          stageIndex={stageIndex}
          titleHeader={'Video Cuestionario'}
          titleTask={titleTask} />
      </div>
      <div>
        <h3>ShowButtonRight: true </h3>
        <h3>id:null -- showInputName:true</h3>
        <HeaderTask
          _id={null}
          arrowBackIcon={arrowBackIcon}
          checkbox={checkbox}
          isDraft={true}
          numberCandidates={numberCandidates}
          showButtonsRight={true}
          showInputName={true}
          stageIndex={stageIndex}
          titleHeader={'Videos'}
          titleTask={titleTask} />
      </div>
      <div>
        <h3>id:number, isDraft: false </h3>
        <HeaderTask
          _id={'1'}
          arrowBackIcon={arrowBackIcon}
          checkbox={true}
          isDraft={false}
          numberCandidates={numberCandidates}
          showButtonsRight={true}
          showInputName={false}
          stageIndex={stageIndex}
          titleHeader={'Tareas'}
          titleTask={titleTask} />
      </div>
      <div>
        <h3>id:number , isDraft: true </h3>
        <HeaderTask
          _id={'1'}
          arrowBackIcon={arrowBackIcon}
          checkbox={true}
          isDraft={true}
          numberCandidates={numberCandidates}
          showButtonsRight={true}
          showInputName={false}
          stageIndex={stageIndex}
          titleHeader={'Tareas'}
          titleTask={titleTask} />
      </div>
    </div >

  )
}
