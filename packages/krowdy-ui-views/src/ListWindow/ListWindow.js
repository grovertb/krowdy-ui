import React, { useRef, useEffect } from 'react'
import { FixedSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'

function ListWindow(props) {
  const {
    // hasNextPage,
    // isNextPageLoading,
    ItemComponent,
    rows,
    loadMoreItems: loadNextPage,
    pagination,
    listWidth = 300,
    listHeight = 300,
    itemHeight = 30
  } = props

  // const listRef = useRef(null)
  // const hasMountedRef = useRef(false)

  // Each time the sort prop changed we called the method resetloadMoreItemsCache to clear the cache
  // useEffect(() => {
  //   if(listRef.current && hasMountedRef.current)
  //     listRef.current.resetloadMoreItemsCache()

  //   hasMountedRef.current = true
  // }, [ sortOrder ])

  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  // const itemCount = hasNextPage ? rows.length + 1 : rows.length

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = rows.length < pagination.page + 1 * pagination.perPage ? loadNextPage : () => {}

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = index => !!rows[index] // index < rows.length || !hasNextPage

  // Render an item or a loading indicator.
  // const Item = ({ index, style }) => {
  //   let content = (!isItemLoaded(index)) ? 'Loading...' : rows[index]
  //   // let content = isItemLoaded && rows[index] ? rows[index].name : 'Loading...'

  //   return <div style={style}>{content}</div>
  // }
  // console.log('Grover: isItemLoaded', isItemLoaded)

  // We passed down the ref to the InfiniteLoader component
  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={pagination.total}
      // ref={listRef}
      loadMoreItems={loadMoreItems}>
      {({ onItemsRendered, ref }) => (
        <List
          height={listHeight}
          itemCount={pagination.total}
          itemSize={itemHeight}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width={listWidth}>
          {ItemComponent}
        </List>
      )}
    </InfiniteLoader>
  )
}

export default ListWindow
