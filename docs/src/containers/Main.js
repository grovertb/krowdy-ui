import React from 'react'
import { ThemeProvider } from '@krowdy-ui/styles'
import { CssBaseline, createMuiTheme, krowdyTheme } from '@krowdy-ui/core'

import Header from '../components/Header'

export default function Main(props) {
  return (
    <ThemeProvider theme={createMuiTheme(krowdyTheme)}>
      <CssBaseline />
      <Header />
      {props.children}
    </ThemeProvider>
  )
}