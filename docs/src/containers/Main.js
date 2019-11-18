import React from 'react'
import { CssBaseline, ThemeProvider, createMuiTheme } from '@krowdy-ui/core'

import Header from '../components/Header'

export default function Main(props) {
  return (
    <ThemeProvider theme={createMuiTheme()}>
      <CssBaseline />
      <Header />
      {props.children}
    </ThemeProvider>
  )
}