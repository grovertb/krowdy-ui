import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Paper, TableCell } from '@material-ui/core'
import { AutoSizer, Column, Table } from 'react-virtualized'

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    alignItems: 'center',
    boxSizing : 'border-box',
    display   : 'flex'
  },
  noClick: {
    cursor: 'initial'
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip        : false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined
    }
  },
  tableCell: {
    flex: 1
  },
  tableRow: {
    cursor: 'pointer'
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200]
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
  const { columns, rowHeight = 48, headerHeight = 48, onRowClick, ...tableProps } = props
  const classes = useStyles()

  const getRowClassName = ({ index }) =>
    clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null
    })

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
        {Component ? <Component rowData={rowData} value={cellData} /> : cellData}
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
        <span>{Component ? <Component value={label} /> : label}</span>
      </StyledTableCell>
    )
  }

  return (
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

const TableInfinity = ({ columns, rows, onRowClick, ...rest }) => {
  const classes = useMainStyles()

  return (
    <Paper className={classes.paper}>
      <VirtualizedTable
        columns={columns}
        onRowClick={onRowClick}
        rowCount={rows.length}
        {...rest}
        rowGetter={({ index }) => rows[index]} />
    </Paper>
  )
}

const useMainStyles = makeStyles(() => ({
  paper: {
    height: 400,
    width : '100%'
  }
}))

export default TableInfinity
