import React from 'react'
import { makeStyles } from '@krowdy-ui/styles'
import { Fade } from '@krowdy-ui/core'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { Javascript as JavaScriptIcon, TypeScript as TypeScriptIcon } from 'components/Icons'
import { CODE_VARIANTS, t } from './utils'

const useStyles = makeStyles({
  toggleButton: {
    height: 32
  },
  toggleButtonGroup: {
    margin: '8px 0'
  }
}, { name: 'DemoLanguages' })

function DemoLanguages(props) {
  const { codeOpen, codeVariant, demo, gaEventCategory, onLanguageClick } = props
  const classes = useStyles()
  const hasTSVariant = demo.rawTS

  function renderedCodeVariant() {
    if(codeVariant === CODE_VARIANTS.TS && hasTSVariant)
      return CODE_VARIANTS.TS

    return CODE_VARIANTS.JS
  }

  return (
    <Fade in={codeOpen}>
      <ToggleButtonGroup
        className={classes.toggleButtonGroup}
        exclusive
        onChange={onLanguageClick}
        value={renderedCodeVariant()}>
        <ToggleButton
          aria-label={t('showJSSource')}
          className={classes.toggleButton}
          data-ga-event-action='source-js'
          data-ga-event-category={gaEventCategory}
          value={CODE_VARIANTS.JS}>
          <JavaScriptIcon />
        </ToggleButton>
        <ToggleButton
          aria-label={t('showTSSource')}
          className={classes.toggleButton}
          data-ga-event-action='source-ts'
          data-ga-event-category={gaEventCategory}
          disabled={!hasTSVariant}
          value={CODE_VARIANTS.TS}>
          <TypeScriptIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Fade>
  )
}

export default DemoLanguages
