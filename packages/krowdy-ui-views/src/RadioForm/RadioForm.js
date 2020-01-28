import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import {
  FormControlLabel,
  Radio,
  RadioGroup
} from '@krowdy-ui/core'

export const styles = theme => ({
  boxContainer: {
    display: 'flex'
  },
  isRow: {
    flexDirection: 'row'
  },
  isVert: {
    flexDirection: 'column'
  },
  noLine: {
    margin : 0,
    padding: theme.spacing(1.5, 1)
  },
  outlineRow: {
    margin: theme.spacing(0, 0.6, 0, 0.6)
  },
  outlined: {
    '&:hover': {
      border: `1px solid ${theme.palette.primary[400]}`
    },
    border : `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(1.5, 1.25)
  },
  outlinedVert: {
    margin: theme.spacing(0.6, 0, 0.6, 0)
  },
  roundBorder: {
    borderRadius: 8
  },
  size: {
    fontSize: 14
  }
})

const InputsRadiosForm = props => {
  const {
    classes,
    isRow,
    inputs = [],
    onChange = () => { },
    outlined,
    valueDefault,
    name
  } = props

  const [ currentValue, setValue ] = React.useState(valueDefault)

  const handleChange = event => {
    setValue(event.target.value)
    onChange(event)
  }

  return (
    <RadioGroup
      className={clsx(classes.boxContainer, { [classes.isVert]: !isRow }, { [classes.isRow]: isRow })} name={name} onChange={handleChange}
      row={isRow} value={currentValue}>
      {
        inputs.map((element) => (
          <FormControlLabel
            classes={{ label: classes.size }}
            className={clsx({ [classes.noLine]: !outlined }, { [classes.outlined && classes[`${outlined}Border`]]: outlined }, { [classes.outlinedVert]: !isRow }, { [classes.outlineRow]: isRow })}
            control={<Radio color='primary' disableRipple size='small' />}
            key={element._id}
            label={element.label}
            value={element.value} />
        ))
      }
    </RadioGroup>
  )
}

InputsRadiosForm.propTypes = {
  classes     : PropTypes.object,
  inputs      : PropTypes.array,
  isRow       : PropTypes.bool,
  name        : PropTypes.string,
  onChange    : PropTypes.func,
  outlined    : PropTypes.oneOf([ 'square', 'round' ]),
  valueDefault: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
}

InputsRadiosForm.muiName = 'InputsRadiosForm'

export default withStyles(styles, { name: 'KrowdyInputsRadiosForm' })(InputsRadiosForm)
