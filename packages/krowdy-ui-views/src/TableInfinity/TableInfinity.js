import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Paper, TableCell } from '@material-ui/core'
import { AutoSizer, Column, Table, InfiniteLoader } from 'react-virtualized'
import { Typography } from '@krowdy-ui/core'

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    alignItems    : 'center',
    boxSizing     : 'border-box',
    display       : 'flex',
    justifyContent: 'space-between'
  },
  noClick: {
    cursor: 'initial'
  },
  selected: {
    backgroundColor: theme.palette.primary[50]
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      backgroundColor: theme.palette.secondary[50],
      display        : 'flex',
      flip           : false,
      justifyContent : 'space-between',
      paddingRight   : '0px !important'
    }
  },
  tableCell: {
    flex: 1
  },
  tableRow: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    boxSizing   : 'border-box',
    cursor      : 'pointer'
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.primary[50]
    }
  }
}))

const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 14
  },
  head: {
    backgroundColor: theme.palette.secondary[50],
    color          : theme.palette.grey[800]
  }
}))(TableCell)

const VirtualizedTable = (props) => {
  const {
    columns, rowHeight = 48,
    headerHeight = 48,
    onRowClick, rowCount,
    rows,
    isRowLoaded = () => {},
    loadMoreRows = () => {},
    ...tableProps } = props
  const classes = useStyles()

  const getRowClassName = ({ index }) => {
    let checked = false
    if(index > -1) {
      const { checked: rowChecked, selected } = rows[index]
      checked = rowChecked || selected
    }

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
      [classes.selected]     : checked
    })
  }

  const cellRenderer = ({ cellData, columnIndex, rowData }) => {
    const { numeric, rowComponent: Component } = columns[columnIndex]

    return (
      <TableCell
        align={(columnIndex != null && numeric) || false ? 'right' : 'left'}
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null
        })}
        component='div'
        style={{ height: rowHeight }}
        variant='body'>
        <Typography variant='body2'>{Component ? <Component rowData={rowData} value={cellData} /> : cellData}</Typography>
      </TableCell>
    )
  }

  const headerRenderer = (data) => {
    const { label, columnIndex } = data
    const { numeric, columnComponent: Component } = columns[columnIndex]

    return (
      <StyledTableCell
        align={numeric || false ? 'right' : 'left'}
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        component='div'
        style={{ height: headerHeight }}
        variant='head'>
        <Typography variant='h5'>{Component ? <Component value={label} /> : label}</Typography>
      </StyledTableCell>
    )
  }

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={rowCount}>
      {({ onRowsRendered, registerChild }) => (
        <AutoSizer>
          {({ height, width }) => (
            <Table
              className={classes.table}
              gridStyle={{
                direction: 'inherit'
              }}
              headerHeight={headerHeight}
              height={height}
              onRowClick={onRowClick}
              onRowsRendered={onRowsRendered}
              ref={registerChild}
              rowCount={rowCount}
              rowHeight={rowHeight}
              width={width}
              {...tableProps}
              rowClassName={getRowClassName}>
              {columns.map(({ key, ...other }, index) => (
                <Column
                  cellRenderer={cellRenderer}
                  className={classes.flexContainer}
                  dataKey={key}
                  headerRenderer={(headerProps) =>
                    headerRenderer({
                      ...headerProps,
                      columnIndex: index
                    })
                  }
                  key={key}
                  {...other} />
              ))}
            </Table>
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  )
}

VirtualizedTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key    : PropTypes.string.isRequired,
      label  : PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width  : PropTypes.number
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick  : PropTypes.func,
  rowHeight   : PropTypes.number
}

const TableInfinity = ({ height = 400, width = '100%', columns, rows, onRowClick, ...rest }) => {
  const classes = useMainStyles({ height, width })

  return (
    <Paper className={classes.paper}>
      <VirtualizedTable
        columns={columns}
        onRowClick={onRowClick}
        rowCount={rows.length}
        rows={rows}
        {...rest}
        rowGetter={({ index }) => rows[index]} />
    </Paper>
  )
}

const useMainStyles = makeStyles(() => ({
  paper: {
    height: ({ height }) => height,
    width : ({ width }) => width
  }
}))

export default TableInfinity
