import React from 'react'
import { HeaderTask } from '@krowdy-ui/views'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export default function () {
  const titleHeader = 'Video Cuestionario'
  const arrowBackIcon = <ArrowBackIcon />
  const titleTask = 'Titulo de video entrevista'
  const numberCandidates = 10
  const stageIndex = 0
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
        // onClickArrowBackIcon={}
        // valueTitleTask={}
        checkedSwitch={checkedSwitch}
        onChangeSwitch={onChangeSwitch}
        arrowBackIcon={arrowBackIcon}
        titleHeader={titleHeader}
        titleTask={titleTask}
        numberCandidates={numberCandidates}
        stageIndex={stageIndex}
        id={id}
      />
    </div>
  )
}