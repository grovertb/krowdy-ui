import React from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeProvider, makeStyles } from '@krowdy-ui/styles'
import { CssBaseline, createMuiTheme, krowdyTheme, Container } from '@krowdy-ui/core'

import Header from '../components/Header'

const useStyles = makeStyles({
  root: {
    display: 'flex'
  }
})

export default function Main({ children }) {
  const theme  = createMuiTheme({
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
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Header />
        {
          location.pathname === '/' ?
            children :
            <Container style={{marginTop: 96}} component='main' maxWidth='lg' >
              {children}
            </Container>

        }
      </div>
    </ThemeProvider>
  )
}