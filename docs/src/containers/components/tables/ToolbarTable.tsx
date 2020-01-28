import React from 'react'
import { TableContainer, TableToolbar, Paper, Container, makeStyles, Button } from '@krowdy-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles({
  root: {
    '& > div': {
      marginBottom: 8
    }
  }
})

function ToolbarTable() {
  const classes = useStyles()

  const _handleSearch = (value: string) => {
    console.log('_handleSearch', value)
  }

  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>
        <TableToolbar
          title='Title' />
      </TableContainer>
      <TableContainer component={Paper}>
        <TableToolbar
          onHandleSearch={_handleSearch}
          searchIcon={SearchIcon}
          title='Title and search'
          withSearch />
      </TableContainer>
      <TableContainer component={Paper}>
        <TableToolbar
          onHandleSearch={_handleSearch}
          searchIcon={SearchIcon}
          withSearch />
      </TableContainer>
      <TableContainer component={Paper}>
        <TableToolbar
          action={
            <>
              <Button color='primary' variant='outlined'>
                Agregar nuevo
              </Button>
              <Button color='primary' variant='contained'>
                Agregar prueba
              </Button>
            </>
          }
          onHandleSearch={_handleSearch}
          searchIcon={SearchIcon}
          withSearch />
      </TableContainer>
      <TableContainer component={Paper}>
        <TableToolbar
          action={
            <>
              <Button color='secondary' variant='outlined'>
                Agregar nuevo
              </Button>
              <Button color='secondary' variant='contained'>
                Agregar prueba
              </Button>
            </>
          }
          title='Title with actions' />
      </TableContainer>
    </Container>
  )
}

export default ToolbarTable
