import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Paper, TableCell } from '@material-ui/core'
import { AutoSizer, Column, Table } from 'react-virtualized'

const styles = (theme) => ({
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
})

const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 14
  },
  head: {
    backgroundColor: theme.palette.secondary[50],
    color          : theme.palette.grey[800]
  }
}))(TableCell)

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight   : 48
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null
    })
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props

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
        {Component ? <Component value={cellData} /> : cellData}
      </TableCell>
    )
  };

  headerRenderer = (data) => {
    const { label, columnIndex } = data
    const { headerHeight, columns, classes } = this.props
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
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props

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
            rowHeight={rowHeight}
            width={width}
            {...tableProps}
            rowClassName={this.getRowClassName}>
            {columns.map(({ key, ...other }, index) => (
              <Column
                cellRenderer={this.cellRenderer}
                className={classes.flexContainer}
                dataKey={key}
                headerRenderer={(headerProps) =>
                  this.headerRenderer({
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
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key    : PropTypes.string.isRequired,
      label  : PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width  : PropTypes.number.isRequired
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick  : PropTypes.func,
  rowHeight   : PropTypes.number
}

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable)

const TableInfinity = ({ columns, rows }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <VirtualizedTable
        columns={columns}
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]} />
    </Paper>
  )
}

const useStyles = makeStyles(() => ({
  paper: {
    height: 400,
    width : '100%'
  }
}))

export default TableInfinity
