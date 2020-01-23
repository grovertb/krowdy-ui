import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import {
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@krowdy-ui/core'

export const styles = theme => ({
  boxContainer: {
    display: 'flex',
    minWidth: 98
  },
  isVert: {
    flexDirection: 'column'
  },
  noLine: {
    margin: 0,
    padding: theme.spacing(1.5, 1)
  },
  outlined: {
    '&:hover': {
      border: `1px solid ${theme.palette.primary[400]}`,
    },
    border: `1px solid ${theme.palette.grey[300]}`,
    margin: theme.spacing(1.5, 0, 0, 0),
    padding: theme.spacing(1.5, 1.25)
  },
  roundBorder: {
    borderRadius: 8,
  },
  size: {
    fontSize: 14
  },

})

const InputsRadiosForm = props => {
  const {
    classes,
    isRow,
    inputs = [],
    onChange = () => { },
    outlined,
    value,
    name
  } = props

  const [currentValue, setValue] = React.useState(value)

  const handleChange = event => {
    setValue(event.target.value)
    onChange(event)
  }

  return (
    <RadioGroup name={name} value={currentValue} className={clsx(classes.boxContainer, { [classes.isVert]: !isRow })} onChange={handleChange} row={isRow}>
      {
        inputs.map((element) => {
          return (
            <FormControlLabel
              className={(outlined) ? clsx(classes.outlined, classes[`${outlined}Border`]) : clsx(classes.noLine)}
              key={element._id}
              value={element.value}
              label={element.label}
              classes={{ label: classes.size }}
              control={<Radio color='primary' size='small' disableRipple />} />
          )
        })
      }
    </RadioGroup>
  )
}

InputsRadiosForm.propTypes = {
  classes: PropTypes.object,
  inputs: PropTypes.array,
  isRow: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  outlined: PropTypes.oneOf(['square', 'round']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

InputsRadiosForm.muiName = 'InputsRadiosForm'

export default withStyles(styles, { name: 'KrowdyInputsRadiosForm' })(InputsRadiosForm)