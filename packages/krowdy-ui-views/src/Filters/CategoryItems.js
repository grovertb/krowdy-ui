import React, { useMemo } from 'react'
import InfiniteLoader from 'react-window-infinite-loader'
import { FixedSizeList as List } from 'react-window'
import { FormControlLabel, Checkbox, makeStyles } from '@krowdy-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import arr2obj from '../utils/arr2obj'

const useStyles = makeStyles({
  formControlLabel: {
    boxSizing  : 'border-box',
    paddingLeft: 11
  },
  formLabel: {
    overflow    : 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace  : 'nowrap'
  },
  loadingContainer: {
    display       : 'flex',
    justifyContent: 'center'
  }
})

const CategoryItems = ({
  items = [],
  selectedItems = [],
  pagination,
  onChangeSelected,
  isNextPageLoading = false,
  loadNextPage
}) => {
  const classes = useStyles()
  const itemCount = pagination.hasNextPage ? items.length + 1 : items.length
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage
  const isItemLoaded = index => !pagination.hasNextPage || index < items.length

  const selectedMap = useMemo(() => arr2obj(selectedItems, {
    key  : item => item._id,
    value: item => item
  }), [ selectedItems ])

  const _handleChange = item => (event) => {
    let updatedSelected = []
    if(event.target.checked)
      updatedSelected = [ ...selectedItems, item ]
    else
      updatedSelected = selectedItems.filter(selected => selected._id !== item._id)

    onChangeSelected(updatedSelected)
  }

  const Item = ({ index, style }) => {
    if(!isItemLoaded(index)) {
      return (
        <div className={classes.loadingContainer} style={style}>
          <CircularProgress size={20} style={{ marginTop: 8 }} />
        </div>
      )
    }
    else {
      const item = items[index]
      const isSelected = Boolean(selectedMap[item._id])

      return (
        <FormControlLabel
          classes={{
            label: classes.formLabel,
            root : classes.formControlLabel
          }}
          color='primary'
          control={
            <Checkbox
              checked={isSelected}
              color='primary'
              onChange={_handleChange(item)}
              size='small'
              value={item._id} />
          }
          key={index}
          label={item.label}
          size='small'
          style={style} />
      )
    }
  }

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}>
      {({ onItemsRendered, ref }) => (
        <List
          height={350}
          itemCount={itemCount}
          itemSize={36}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width={272}>
          {Item}
        </List>
      )
      }
    </InfiniteLoader>
  )
}

export default CategoryItems
