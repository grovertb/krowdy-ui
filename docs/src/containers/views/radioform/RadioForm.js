import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { RadioForm } from '@krowdy-ui/views'
import { makeStyles } from '@krowdy-ui/styles'

const useStyles = makeStyles({
  formContainer: {
    margin : '10%',
    padding: '5%'
  }
})

const inputsRadios = [
  {
    _id  : 1,
    label: 'label1',
    value: '1'
  },
  {
    _id  : 2,
    label: 'label2',
    value: 'value2'
  },
  {
    _id  : 3,
    label: 'label3',
    value: 'value3'
  }
]

export default function () {
  const classes = useStyles()

  return (
    <Grid container justify='flex-start'>
      <Grid item xs={4}>
        <fieldset className={classes.formContainer} >
          <legend>
            Form 1
          </legend>
          <RadioForm
            inputs={inputsRadios}
            outlined='round'
            value='value2' />
        </fieldset>
      </Grid>
      <Grid item xs={4}>
        <fieldset className={classes.formContainer} >
          <legend>
            Form 2
          </legend>
          <RadioForm
            inputs={inputsRadios}
            outlined='square'
            value='value1' />
        </fieldset>
      </Grid>
      <Grid item xs={4}>
        <fieldset className={classes.formContainer} >
          <legend>
            Form 3
          </legend>
          <RadioForm
            inputs={inputsRadios}
            value='value2' />
        </fieldset>
      </Grid>
      <Grid item xs={5}>
        <fieldset className={classes.formContainer} >
          <legend>
            Form 4
          </legend>
          <RadioForm
            inputs={inputsRadios}
            isRow
            value='value2' />
        </fieldset>
      </Grid>
      <Grid item xs={5}>
        <fieldset className={classes.formContainer} >
          <legend>
            Form 5
          </legend>
          <RadioForm
            inputs={inputsRadios}
            isRow
            outlined='round'
            value='value2' />
        </fieldset>
      </Grid>
    </Grid >
  )
}

