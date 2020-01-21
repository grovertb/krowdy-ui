import React from 'react'
import { withStyles } from '@krowdy-ui/styles'
import { green } from '@krowdy-ui/core/colors'
import {
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@krowdy-ui/core'
import {
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  CheckBox as CheckBoxIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon
}  from '@material-ui/icons'

const GreenCheckbox = withStyles({
  checked: {},
  root   : {
    '&$checked': {
      color: green[600]
    },
    color: green[400]
  }
})(props => <Checkbox color='default' {...props} />)

export default function CheckboxLabels() {
  const [ state, setState ] = React.useState({
    checkedA     : true,
    checkedB     : true,
    checkedError : true,
    checkedF     : true,
    checkedG     : true,
    checkedKrowdy: true
  })

  const _handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedA} onChange={_handleChange('checkedA')} value='checkedA' />
        }
        label='Secondary' />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            color='primary'
            onChange={_handleChange('checkedB')}
            value='checkedB' />
        }
        label='Primary' />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedKrowdy}
            color='krowdy'
            onChange={_handleChange('checkedKrowdy')}
            value='checkedKrowdy' />
        }
        label='Krowdy' />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedError}
            color='error'
            onChange={_handleChange('checkedError')}
            value='checkedError' />
        }
        label='Error' />
      <FormControlLabel control={<Checkbox value='checkedC' />} label='Uncontrolled' />
      <FormControlLabel control={<Checkbox value='checkedD' />} disabled label='Disabled' />
      <FormControlLabel control={<Checkbox checked value='checkedE' />} disabled label='Disabled' />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedF}
            indeterminate
            onChange={_handleChange('checkedF')}
            value='checkedF' />
        }
        label='Indeterminate' />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedG}
            onChange={_handleChange('checkedG')}
            value='checkedG' />
        }
        label='Custom color' />
      <FormControlLabel
        control={
          <Checkbox
            checkedIcon={<FavoriteIcon />}
            icon={<FavoriteBorderIcon />}
            value='checkedH' />
        }
        label='Custom icon' />
      <FormControlLabel
        control={
          <Checkbox
            checkedIcon={<CheckBoxIcon fontSize='small' />}
            icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
            value='checkedI' />
        }
        label='Custom size' />
    </FormGroup>
  )
}
