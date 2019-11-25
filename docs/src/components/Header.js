import React, { Fragment } from 'react'

import { 
  Toolbar, 
  AppBar, 
  IconButton
} from '@krowdy-ui/core'

import MenuIcon from '@krowdy-ui/icons/Menu'
import AppDrawer from '../components/AppDrawer'
import { makeStyles } from '@krowdy-ui/styles'

const useStyles = makeStyles(theme => ({
  appBarShift: {
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 240px)',
    },
  },
  navIconHide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  }
}))

export default function Header() {
  const [ drawerOpen, setDrawerOpen ] = React.useState(false);
  const classes = useStyles()

  const _handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <Fragment>
      <AppBar position='fixed' color='primary' elevation={0} className={classes.appBarShift}>
        <Toolbar >
          <IconButton
            edge="start"
            color="inherit"
            className={classes.navIconHide}
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