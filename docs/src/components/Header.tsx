import React, { Fragment } from 'react'

import { Toolbar, AppBar, IconButton, SwipeableDrawer } from '@krowdy-ui/core'

import MenuIcon from '@krowdy-ui/icons/Menu'
import { Link } from '@material-ui/core';

export default  () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const _handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }


  return (
    <Fragment>
      <AppBar position='static' color='secondary'>
      <Toolbar >
        <IconButton
            edge="start"
            color="inherit"
            // aria-label={t('openDrawer')}
            // className={navIconClassName}
            onClick={_handleToggleDrawer}
          >
            <MenuIcon />
          </IconButton>
      </Toolbar>
    </AppBar>
    <SwipeableDrawer
      onClose={_handleToggleDrawer}
      onOpen={_handleToggleDrawer}
      open={drawerOpen}
    >
      <Link variant="h6" color="inherit">
        Krowdy-UI
      </Link>
    </SwipeableDrawer>
    </Fragment>
  )
}