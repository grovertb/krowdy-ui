import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Fade from '@material-ui/core/Fade';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
// import { JavaScript as JavaScriptIcon, TypeScript as TypeScriptIcon } from '@material-ui/docs';
import { CODE_VARIANTS, t } from './utils';

const useStyles = makeStyles({
  toggleButtonGroup: {
    margin: '8px 0',
  },
  toggleButton: {
    height: 32,
  },
});

function DemoLanguages(props) {
  const { codeOpen, codeVariant, demo, gaEventCategory, onLanguageClick } = props;
  const classes = useStyles()
  const hasTSVariant = demo.rawTS;

  function renderedCodeVariant() {
    if (codeVariant === CODE_VARIANTS.TS && hasTSVariant) {
      return CODE_VARIANTS.TS;
    }
    return CODE_VARIANTS.JS;
  }

  return (
    <Fade in={codeOpen}>
      <ToggleButtonGroup
        className={classes.toggleButtonGroup}
        exclusive
        value={renderedCodeVariant()}
        onChange={onLanguageClick}
      >
        <ToggleButton
          className={classes.toggleButton}
          value={CODE_VARIANTS.JS}
          aria-label={t('showJSSource')}
          data-ga-event-category={gaEventCategory}
          data-ga-event-action="source-js"
        >
          JS {/* <JavaScriptIcon /> */}
        </ToggleButton>
        <ToggleButton
          className={classes.toggleButton}
          value={CODE_VARIANTS.TS}
          disabled={!hasTSVariant}
          aria-label={t('showTSSource')}
          data-ga-event-category={gaEventCategory}
          data-ga-event-action="source-ts"
        >
          TS {/* <TypeScriptIcon /> */}
        </ToggleButton>
      </ToggleButtonGroup>
    </Fade>
  );
}

export default DemoLanguages;
