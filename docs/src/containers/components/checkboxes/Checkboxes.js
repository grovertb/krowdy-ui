import React from 'react'
import Checkbox from '@krowdy-ui/core/Checkbox'

export default function Checkboxes() {
  const [ state, setState ] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedH: true
  })

  const _handleChange = name => ev => {
    setState({ ...state, [name]: ev.target.checked })
  }

  return (
    <div>
      <Checkbox
        checked={state.checkedA}
        inputProps={{
          'aria-label': 'primary checkbox'
        }}
        onChange={_handleChange('checkedA')}
        value='checkedA' />
      <Checkbox
        checked={state.checkedB}
        color='primary'
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
        onChange={_handleChange('checkedB')}
        value='checkedB' />
      <Checkbox
        checked={state.checkedC}
        color='krowdy'
        inputProps={{
          'aria-label': 'krowdy checkbox'
        }}
        onChange={_handleChange('checkedC')}
        value='checkedC' />
      <Checkbox
        checked={state.checkedD}
        color='error'
        inputProps={{
          'aria-label': 'error checkbox'
        }}
        onChange={_handleChange('checkedD')}
        value='checkedD' />
      <Checkbox
        inputProps={{
          'aria-label': 'uncontrolled-checkbox'
        }}
        value='checkedE' />
      <Checkbox
        disabled
        inputProps={{
          'aria-label': 'disabled checkbox'
        }}
        value='checkedF' />
      <Checkbox
        checked
        disabled
        inputProps={{
          'aria-label': 'disabled checked checkbox'
        }}
        value='checkedG' />
      <Checkbox
        checked={state.checkedH}
        indeterminate
        inputProps={{
          'aria-label': 'indeterminate checkbox'
        }}
        onChange={_handleChange('checkedH')}
        value='checkedH' />
      <Checkbox
        color='default'
        defaultChecked
        inputProps={{
          'aria-label': 'checkbox with default color'
        }}
        value='checkedI' />
    </div>
  )
}
