import React from 'react'
import Checkbox from '@krowdy-ui/core/Checkbox'

export default function Checkboxes() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedH: true,
  })

  const _handleChange = name => ev => {
    setState({ ...state, [name]: ev.target.checked })
  }

  return (
    <div>
      <Checkbox
        checked={state.checkedA}
        onChange={_handleChange('checkedA')}
        value='checkedA'
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
      <Checkbox
        checked={state.checkedB}
        onChange={_handleChange('checkedB')}
        value='checkedB'
        color='primary'
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />
      <Checkbox
        checked={state.checkedC}
        onChange={_handleChange('checkedC')}
        value='checkedC'
        color='krowdy'
        inputProps={{
          'aria-label': 'krowdy checkbox',
        }}
      />
      <Checkbox
        checked={state.checkedD}
        onChange={_handleChange('checkedD')}
        value='checkedD'
        color='error'
        inputProps={{
          'aria-label': 'error checkbox',
        }}
      />
      <Checkbox
        value='checkedE'
        inputProps={{
          'aria-label': 'uncontrolled-checkbox',
        }}
      />
      <Checkbox
        disabled
        value='checkedF'
        inputProps={{
          'aria-label': 'disabled checkbox',
        }}
      />
      <Checkbox
        disabled
        checked
        value='checkedG'
        inputProps={{
          'aria-label': 'disabled checked checkbox',
        }}
      />
      <Checkbox
        checked={state.checkedH}
        onChange={_handleChange('checkedH')}
        value='checkedH'
        indeterminate
        inputProps={{
          'aria-label': 'indeterminate checkbox',
        }}
      />
      <Checkbox
        defaultChecked
        color='default'
        value='checkedI'
        inputProps={{
          'aria-label': 'checkbox with default color',
        }}
      />
    </div>
  )
}