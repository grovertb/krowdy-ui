import React from 'react';
import { withStyles } from '@krowdy-ui/styles';
import { green } from '@krowdy-ui/core/colors';
import {
	Checkbox,
	FormGroup,
	FormControlLabel
} from '@krowdy-ui/core';
import { 
	CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
	CheckBox as CheckBoxIcon,
	Favorite as FavoriteIcon,
	FavoriteBorder as FavoriteBorderIcon
}  from '@krowdy-ui/icons';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
    checkedKrowdy: true,
    checkedDanger: true,
  });

  const _handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedA} onChange={_handleChange('checkedA')} value="checkedA" />
        }
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={_handleChange('checkedB')}
            value="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      <FormControlLabel 
        control={
          <Checkbox 
            checked={state.checkedKrowdy}
            onChange={_handleChange('checkedKrowdy')}
            value="checkedKrowdy"
            color='krowdy' />
        } 
        label="Krowdy" />
      <FormControlLabel 
        control={
          <Checkbox
            checked={state.checkedDanger}
            onChange={_handleChange('checkedDanger')}
            value="checkedDanger"
            color='danger' />
        } 
        label="Danger" />
      <FormControlLabel control={<Checkbox value="checkedC" />} label="Uncontrolled" />
      <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />
      <FormControlLabel disabled control={<Checkbox checked value="checkedE" />} label="Disabled" />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedF}
            onChange={_handleChange('checkedF')}
            value="checkedF"
            indeterminate
          />
        }
        label="Indeterminate"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedG}
            onChange={_handleChange('checkedG')}
            value="checkedG"
          />
        }
        label="Custom color"
      />
      <FormControlLabel
        control={
          <Checkbox 
            icon={<FavoriteBorderIcon />} 
            checkedIcon={<FavoriteIcon />} 
            value="checkedH" />
				}
        label="Custom icon"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            value="checkedI"
          />
        }
        label="Custom size"
      />
    </FormGroup>
  );
}