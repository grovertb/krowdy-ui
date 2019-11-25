import React, { Fragment } from 'react'

import { 
  Toolbar, 
  AppBar, 
  IconButton
} from '@krowdy-ui/core'

import MenuIcon from '@krowdy-ui/icons/Menu'
import AppDrawer from '../components/AppDrawer'

export default function Header() {
  const [ drawerOpen, setDrawerOpen ] = React.useState(false);

  const _handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <Fragment>
      <AppBar position='static' color='primary' elevation={0}>
        <Toolbar >
          <IconButton
              edge="start"
              color="inherit"
              onClick={_handleToggleDrawer}
            >
              <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
      <AppDrawer onToggleDrawer={_handleToggleDrawer} drawerOpen={drawerOpen} />
    </Fragment>
  )
}