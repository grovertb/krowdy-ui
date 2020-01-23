import React from 'react'
import { makeStyles } from '@krowdy-ui/styles'
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormGroup,
  FormLabel,
  FormControl
} from '@krowdy-ui/core'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  },
  root: {
    display: 'flex'
  }
}))

export default function CheckboxesGroup() {
  const classes = useStyles()
  const [ state, setState ] = React.useState({
    antoine: false,
    gilad  : true,
    jason  : false
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  const { gilad, jason, antoine } = state
  const error = [ gilad, jason, antoine ].filter(v => v).length !== 2

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl} component='fieldset'>
        <FormLabel component='legend'>Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange('gilad')} value='gilad' />}
            label='Gilad Gray' />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange('jason')} value='jason' />}
            label='Jason Killian' />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange('antoine')} value='antoine' />
            }
            label='Antoine Llorca' />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl
        className={classes.formControl} component='fieldset' error={error}
        required>
        <FormLabel component='legend'>Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange('gilad')} value='gilad' />}
            label='Gilad Gray' />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange('jason')} value='jason' />}
            label='Jason Killian' />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange('antoine')} value='antoine' />
            }
            label='Antoine Llorca' />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </div>
  )
}
