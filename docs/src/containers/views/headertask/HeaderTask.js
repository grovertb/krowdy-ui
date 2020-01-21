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
      display: 'flex',
      flexDirection: 'column',
      height: 400,
      justifyContent: 'space-evenly',
      margin: '50px',
      width: 'auto'
    }}>
      <div>
        <h3>ShowButtonRight: false </h3>
        <HeaderTask
          isDraft={false}
          checkbox={checkbox}
          showButtonsRight={false}
          showInputName={false}
          arrowBackIcon={arrowBackIcon}
          titleHeader={'Video Cuestionario'}
          titleTask={titleTask}
          numberCandidates={numberCandidates}
          stageIndex={stageIndex}
          _id={null}
        />
      </div>
      <div>
        <h3>ShowButtonRight: true </h3>
        <h3>id:null -- showInputName:true</h3>
        <HeaderTask
          isDraft={true}
          checkbox={checkbox}
          showButtonsRight={true}
          showInputName={true}
          arrowBackIcon={arrowBackIcon}
          titleHeader={'Videos'}
          titleTask={titleTask}
          numberCandidates={numberCandidates}
          stageIndex={stageIndex}
          _id={null}
        />
      </div>
      <div>
        <h3>id:number, isDraft: false </h3>
        <HeaderTask
          checkbox={true}
          isDraft={false}
          showButtonsRight={true}
          showInputName={false}
          arrowBackIcon={arrowBackIcon}
          titleHeader={'Tareas'}
          titleTask={titleTask}
          numberCandidates={numberCandidates}
          stageIndex={stageIndex}
          _id={'1'}
        />
      </div>
      <div>
        <h3>id:number , isDraft: true </h3>
        <HeaderTask
          checkbox={true}
          isDraft={true}
          showButtonsRight={true}
          showInputName={false}
          arrowBackIcon={arrowBackIcon}
          titleHeader={'Tareas'}
          titleTask={titleTask}
          numberCandidates={numberCandidates}
          stageIndex={stageIndex}
          _id={'1'}
        />
      </div>
    </div >

  )
}