import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types'
import InfiniteLoader from 'react-window-infinite-loader'
import { FixedSizeList as List } from 'react-window'
import CircularProgress from '@material-ui/core/CircularProgress'
import { FormControlLabel, Checkbox, makeStyles } from '@krowdy-ui/core'

const useStyles = makeStyles((theme) => ({
  formControlLabel: {
    boxSizing  : 'border-box',
    paddingLeft: theme.spacing(1.4)
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
}), {
  name: 'KrowdyCategoryItem'
})

const CategoryItems = ({
  items = [],
  selectedItems = [],
  hasNextPage,
  categoryKey,
  onResetCategoryItems = () => {},
  onChangeSelected,
  listWidth = 204,
  loadMore
}) => {
  const classes = useStyles()

  const itemCount = hasNextPage ? items.length + 1 : items.length

  const isItemLoaded = index => !hasNextPage || index < items.length

  const _handleChange = item => (event) => {
    onChangeSelected(event.target.checked ?
      [ ...selectedItems, item ] :
      selectedItems.filter(selected => selected._id !== item._id))
  }

  useEffect(() => {
    onResetCategoryItems(categoryKey)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleLoadMore = hasNextPage ? loadMore : () => {}

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

      return (
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
          size='small'
          style={style} />
      )
    }
  }

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={_handleLoadMore}>
      {
        ({ onItemsRendered, ref }) => (
          <List
            height={350}
            itemCount={itemCount}
            itemSize={36}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width={listWidth - 32/* padding*/}>
            {Item}
          </List>
        )
      }
    </InfiniteLoader>
  )
}

CategoryItems.propTypes = {
  categoryKey: PropTypes.string,
  hasNextPage: PropTypes.bool.isRequired,
  items      : PropTypes.arrayOf(PropTypes.shape({
    _id  : PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  listWidth           : PropTypes.number,
  loadMore            : PropTypes.func.isRequired,
  onChangeSelected    : PropTypes.func.isRequired,
  onResetCategoryItems: PropTypes.func,
  selectedItems       : PropTypes.arrayOf(PropTypes.shape({
    _id  : PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired
}

export default CategoryItems
