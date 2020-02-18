import React from 'react'
import InfiniteLoader from 'react-window-infinite-loader'
import { FixedSizeList as List } from 'react-window'
import { FormControlLabel, Checkbox, makeStyles } from '@krowdy-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

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

const InfiniteItems = ({
  items = [],
  pagination,
  isNextPageLoading = false,
  loadNextPage
}) => {
  const classes = useStyles()
  const itemCount = pagination.hasNextPage ? items.length + 1 : items.length

  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage

  const isItemLoaded = index => !pagination.hasNextPage || index < items.length

  // Render an item or a loading indicator.
  const Item = ({ index, style }) => {
    if(!isItemLoaded(index))
      return (
        <div className={classes.loadingContainer} style={style}>
          <CircularProgress size={20} style={{ marginTop: 8 }} />
        </div>
      )
    else
      return (
        <FormControlLabel
          classes={{
            label: classes.formLabel,
            root : classes.formControlLabel
          }}
          color='primary'
          control={
            <Checkbox color='primary' size='small' value={items[index._id]} />
          }
          key={index}
          label={items[index].label}
          size='small'
          style={style} />
      )
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

export default InfiniteItems
