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
  const showInputName = true

  return (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', margin: '50px' }}>
      <HeaderTask
        // disableActiveTask={}
        // disabledSave={}
        // disabledSelectCandidates={}
        // disabledTitleTask={}
        // disabledUpdateTask={}
        // onClickSelectCandidates={}
        // onClickUpdateTask={}
        // onClickSave={}
        // onClickActiveTask={}
        // onChangeTitleTask={}
        // onKeyUpTitleTask={}
        // onClickArrowBackIcon={}
        // valueTitleTask={}
        // checkedSwitch={checkedSwitch}
        // onChangeSwitch={onChangeSwitch}
        showInputName={showInputName}
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