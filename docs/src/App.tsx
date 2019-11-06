import React from 'react';

import { Button, Toolbar, AppBar } from '@krowdy-ui/core'

function App() {
  return (
    <div>
      <AppBar position='static' color='secondary'>
        <Toolbar/>
      </AppBar>
      <Button size='large' variant='contained' color='primary'>JS</Button>
    </div>
  );
}

export default App;
