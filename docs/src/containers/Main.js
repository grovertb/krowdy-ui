import React from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeProvider, makeStyles } from '@krowdy-ui/styles'
import { CssBaseline, createMuiTheme, krowdyTheme, Container } from '@krowdy-ui/core'
import Header from '../components/Header'

const useStyles = makeStyles({
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
        <Header isRootPath={isRootPath} className={classes.drawer} />
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