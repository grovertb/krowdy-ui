import React from 'react'
import { ThemeProvider } from '@krowdy-ui/styles'
import { CssBaseline, createMuiTheme, krowdyTheme/*, Container*/ } from '@krowdy-ui/core'

import Header from '../components/Header'

export default function Main(props) {
  const theme  = createMuiTheme({
    palette: {
      ...krowdyTheme.palette,
      background: {
        level1: '#fff',
        level2: '#F5F5F5'
      }
    }
  })

  console.log("TCL: Main -> theme", theme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* <Container component='main'> */}
        {props.children}
      {/* </Container> */}
    </ThemeProvider>
  )
}