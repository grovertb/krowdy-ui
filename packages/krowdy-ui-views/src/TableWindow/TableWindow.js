import React from 'react'
// import { TableHead, TableRow, TableBody, TableCell } from '@krowdy-ui/core'
// import { FixedSizeList as List } from 'react-window'
// import InfiniteLoader from 'react-window-infinite-loader'
import ListWindow from '../ListWindow'

function TableWindow(props) {
  const { rows, /* columns,*/ itemHeight = 50, listHeight= 400, pagination } = props

  // const isItemLoaded = index => Boolean(rows[index])

  const loadMoreItems = (startIndex, stopIndex) => {
    console.log('Grover: loadMoreItems -> stopIndex', stopIndex)
    console.log('Grover: loadMoreItems -> startIndex', startIndex)
    console.log('Grover: loadMoreItems -> pagination', pagination)

    // pagination.page + 1
    // pagination.page

    // console.log('Grover: loadMoreItems -> args', args)
  }

  const sortOrder = 'asc'

  return (
    <>
      {/* <TableHead>
        <TableRow>
          {
            columns.map(column => (
              <TableCell
                align={column.align}
                key={column.id}
                style={{ minWidth: column.minWidth }}>
                {column.label}
              </TableCell>
            ))
          }
        </TableRow>
      </TableHead>
      <TableBody> */}
      <tbody>
        <tr>
          <td>
            {
              rows.length ?
                <ListWindow
                  ItemComponent={
                    ({ index, style }) =>(
                      <div style={style}>
                        {rows[index] ? rows[index].name : 'Loading....'}
                      </div>
                    )
                  }
                  itemHeight={itemHeight}
                  listHeight={listHeight}
                  loadMoreItems={loadMoreItems}
                  pagination={pagination}
                  rows={rows}
                  sortOrder={sortOrder} />:
                null
            }
          </td>
        </tr>
      </tbody>
      {/* {
          rows.map((row, indexRow) => (
            <TableRow
              hover
              key={`row-${indexRow}`}
              role='checkbox'
              tabIndex={-1}>
              {
                columns.map((column, indexCol) => {
                  const value = row[column.id]

                  return (
                    <TableCell
                      align={column.align}
                      key={`cell-${indexRow}-${indexCol}`}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  )
                })
              }
            </TableRow>
          ))
        } */}
      {/* </TableBody> */}
    </>
  )
}

export default TableWindow
