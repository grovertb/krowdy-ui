import React from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeProvider, makeStyles } from '@krowdy-ui/styles'
import { CssBaseline, createMuiTheme, krowdyTheme, Container } from '@krowdy-ui/core'
import Header from '../components/Header'

const useStyles = makeStyles({
  '@global': {
    '#root': {
      display      : 'flex',
      flexDirection: 'column',
      minHeight    : '100vh'
    },
    '::-webkit-scrollbar': {
      height: 6,
      width : 6
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderRadius   : '10px'
    },
    '::-webkit-scrollbar-track': {
      borderRadius: '10px'
    },
    main: {
      display      : 'flex',
      flex         : '1 0 auto',
      flexDirection: 'column'
    }
  },
  drawer: {
    width: 0
  },
  root: {
    display: 'flex'
  },
  spaceDefault: {
    marginTop: 96
  }
}, { name: 'Main' })

export default function Main({ children }) {
  const theme  = createMuiTheme({
    ...krowdyTheme,
    palette: {
      ...krowdyTheme.palette,
      background: {
        level1: '#fff',
        level2: '#F5F5F5'
      }
    }
  })

  const classes = useStyles()
  const location = useLocation()

  const isRootPath = location.pathname === '/'

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Header className={classes.drawer} isRootPath={isRootPath} />
        <Container
          className={classes.spaceDefault}
          component='main'
          maxWidth={isRootPath ? false : 'lg'} >
          {children}
        </Container>
      </div>
    </ThemeProvider>
  )
}
