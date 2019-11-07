import React from 'react';

import { CssBaseline, ThemeProvider, createMuiTheme } from '@krowdy-ui/core'

import Header from './components/Header'

function App() {
  return (
    <ThemeProvider theme={createMuiTheme()}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  );
}

export default App;
