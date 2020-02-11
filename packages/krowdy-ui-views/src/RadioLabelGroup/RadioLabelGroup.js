import React from 'react'
import clsx from 'clsx'
import {
  FormControlLabel,
  Radio,
  RadioGroup
} from '@krowdy-ui/core'
import { withStyles } from '@krowdy-ui/styles'
import PropTypes from 'prop-types'

export const styles = theme => ({
  boxContainer: {
    display   : 'flex',
    paddingTop: 12
  },
  isRow: {
    flexDirection: 'row'
  },
  isVert: {
    flexDirection: 'column'
  },
  label: {
    fontSize: 14
  },
  noLine: {
    margin : 0,
    padding: theme.spacing(1.5, 1)
  },
  outlineRow: {
    margin: theme.spacing(0, 1, 0, 0)
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
    '&:hover': {
      border: `1px solid ${theme.palette.primary[400]}`
    },
    border      : `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 8,
    minWidth    : 120
  }
})

const RadioLabelGroup = props => {
  const {
    classes,
    isRow,
    items = [],
    onChange = () => {},
    outlined,
    value,
    name
  } = props

  const [ currentValue, setValue ] = React.useState(value)

  const handleChange = event => {
    setValue(event.target.value)
    onChange(event)
  }

  return (
    <RadioGroup
      className={clsx(classes.boxContainer, { [classes.isVert]: !isRow }, { [classes.isRow]: isRow })}
      name={name}
      onChange={handleChange}
      row={isRow}
      value={currentValue}>
      {
        items.map((element, index) => (
          <FormControlLabel
            classes={{ label: classes.label }}
            className={clsx({ [classes.noLine]: !outlined }, { [classes.outlined && classes[`${outlined}Border`]]: outlined }, { [classes.outlinedVert]: !isRow }, { [classes.outlineRow]: isRow })}
            control={<Radio
              color='primary'
              disableRipple
              size='small' />}
            key={index}
            label={element.label}
            value={element.value} />
        ))
      }
    </RadioGroup>
  )
}

RadioLabelGroup.propTypes = {
  classes: PropTypes.object,
  isRow  : PropTypes.bool,
  items  : PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any
  })),
  name    : PropTypes.string,
  onChange: PropTypes.func,
  value   : PropTypes.any
}

RadioLabelGroup.muiName = 'RadioLabelGroup'

export default withStyles(styles, { name: 'KrowdyRadioLabelGroup' })(RadioLabelGroup)
