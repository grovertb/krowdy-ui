import React from 'react'
import { HeaderTask } from '@krowdy-ui/views'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export default function () {
  const nameTask = 'Video Cuestionario'
  const arrowBackIcon = <ArrowBackIcon />
  const titleTask = 'Titulo de video entrevista'
  const numberCandidates = 10
  const index = 0
  const id = null

  return (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', margin: '50px' }}>
      <HeaderTask
        // onClickSelectCandidates={}
        // onClickUpdateTask={}
        // onClickSave={}
        // onClickActiveTask={}
        // onChangeTitleTask={}
        // onKeyUpTitleTask={}
        // valueTitleTask={}
        iconArrow={arrowBackIcon}
        nameTask={nameTask}
        titleTask={titleTask}
        numberCandidates={numberCandidates}
        index={index}
        id={id}
      />
    </div>
  )
}