import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel, Checkbox, makeStyles, List } from '@krowdy-ui/core'

const useStyles = makeStyles((theme) => ({
  formControlLabel: {
    boxSizing  : 'border-box',
    paddingLeft: theme.spacing(1.4),
    width      : '100%'
  },
  formLabel: {
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    display             : '-webkit-box',
    lineHeight          : '1.5',
    maxHeight           : 32,
    maxWidth            : 120,
    overflow            : 'hidden',
    textOverflow        : 'ellipsis'
  },
  loadingContainer: {
    display       : 'flex',
    justifyContent: 'center'
  }
}), {
  name: 'KrowdyListItems'
})

const ListItems = ({
  items = [],
  selectedItems = [],
  categoryKey,
  onResetCategoryItems = () => {},
  onChangeSelected
}) => {
  const classes = useStyles()

  const _handleChange = item => (event) => {
    onChangeSelected(event.target.checked ?
      [ ...selectedItems, item ] :
      selectedItems.filter(selected => selected._id !== item._id))
  }

  useEffect(() => {
    onResetCategoryItems(categoryKey, selectedItems)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <List>
      {items.map((item, index) => (
        <FormControlLabel
          classes={{
            label: classes.formLabel,
            root : classes.formControlLabel
          }}
          color='primary'
          control={
            <Checkbox
              checked={Boolean(selectedItems.filter(({ _id }) => _id === item._id).length)}
              color='primary'
              onChange={_handleChange(item)}
              size='small'
              value={item._id} />
          }
          key={index}
          label={item.label}
          size='small' />
      ))}
    </List>
  )
}

ListItems.propTypes = {
  categoryKey: PropTypes.string,
  items      : PropTypes.arrayOf(PropTypes.shape({
    _id  : PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  onChangeSelected    : PropTypes.func.isRequired,
  onResetCategoryItems: PropTypes.func,
  selectedItems       : PropTypes.arrayOf(PropTypes.shape({
    _id  : PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired
}

export default ListItems
