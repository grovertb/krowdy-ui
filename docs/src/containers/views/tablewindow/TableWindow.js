import React from 'react'
import { Table, TableToolbar, TableContainer, Paper } from '@krowdy-ui/core'
import { TableWindow } from '@krowdy-ui/views'
import { makeStyles } from '@krowdy-ui/styles'

const url = 'https://devzeus.krowdy.com/api/v1/activities/log'

const columns = [
  { id: 'id', label: 'title', minWidth: 100 },
  {
    id      : 'userId',
    label   : 'User Id',
    minWidth: 100
  },
  {
    // format  : value => value.toLocaleString(),
    id      : 'title',
    label   : 'Title',
    minWidth: 170
  },
  {
    // format  : value => value.toLocaleString(),
    id      : 'body',
    label   : 'Body',
    minWidth: 170
  }
]

const useStyles = makeStyles({
  tableContainer: {
    maxHeight: 400
  }
})

export default function () {
  const classes = useStyles()
  const [ rows, setRows ]  = React.useState([])
  const [ pagination, setPagination ] = React.useState({
    page   : 1,
    perPage: 10,
    total  : 0
  })

  React.useEffect(() => {
    async function fetchData() {
      console.log('Grover: fetchData -> pagination', pagination)
      const response = await fetch(`${url}?page=${pagination.page}&perPage=${pagination.perPage}`)
      const { data: { rows, pagination: mPagination } } = await response.json()
      setPagination(mPagination)
      setRows(rows)
    }

    fetchData()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleLoadMoreRows = () => {
    async function fetchData() {
      const response = await fetch(`${url}?page=${pagination.page}&perPage=${pagination.perPage}`)
      const { data: { rows, pagination: mPagination } } = await response.json()
      setPagination(mPagination)
      setRows(rows)
    }

    fetchData()
  }

  return (
    <Paper elevation={0}>
      <TableToolbar title='Publicaciones' withSearch />
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader>
          <TableWindow
            columns={columns}
            onLoadMoreRows={_handleLoadMoreRows}
            pagination={pagination}
            rows={rows} />
        </Table>
      </TableContainer>
    </Paper>
  )
}
