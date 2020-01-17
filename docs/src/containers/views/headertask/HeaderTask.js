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

  return (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', margin: '50px', width: 'auto' }}>
      <HeaderTask
        checkbox={checkbox}
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
        showButtonsRight={showButtonsRight}
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