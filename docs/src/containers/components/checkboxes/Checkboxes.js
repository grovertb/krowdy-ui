import React from 'react';
import Checkbox from '@krowdy-ui/core/Checkbox';

export default function Checkboxes() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });

  const _handleChange = name => ev => {
    setState({ ...state, [name]: ev.target.checked });
  };

  return (
    <div>
      <Checkbox
        checked={state.checkedA}
        onChange={_handleChange('checkedA')}
        value="checkedA"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
      <Checkbox
        checked={state.checkedB}
        onChange={_handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />
      <Checkbox
        value="checkedC"
        inputProps={{
          'aria-label': 'uncontrolled-checkbox',
        }}
      />
      <Checkbox
        disabled
        value="checkedD"
        inputProps={{
          'aria-label': 'disabled checkbox',
        }}
      />
      <Checkbox
        disabled
        checked
        value="checkedE"
        inputProps={{
          'aria-label': 'disabled checked checkbox',
        }}
      />
      <Checkbox
        checked={state.checkedF}
        onChange={_handleChange('checkedF')}
        value="checkedF"
        indeterminate
        inputProps={{
          'aria-label': 'indeterminate checkbox',
        }}
      />
      <Checkbox
        defaultChecked
        color="default"
        value="checkedG"
        inputProps={{
          'aria-label': 'checkbox with default color',
        }}
      />
    </div>
  );
}