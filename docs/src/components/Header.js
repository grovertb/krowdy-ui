import React, { Fragment } from 'react'
import { 
  Toolbar, 
  AppBar, 
  IconButton
} from '@krowdy-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AppDrawer from '../components/AppDrawer'
import { makeStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  appBarHome: {
    boxShadow: 'none',
  },
  appBarShift: {
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 240px)',
    },
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: 240,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  }
}), { name: 'Header'})

export default function Header(props) {
  const { className, isRootPath } = props
  const [ drawerOpen, setDrawerOpen ] = React.useState(false)
  const classes = useStyles()

  const _handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  let disablePermanent = false
  let navIconClassName = ''
  let appBarClassName = classes.appBar

  if(isRootPath) {
    disablePermanent = true
    appBarClassName += ` ${classes.appBarHome}`
  } else {
    navIconClassName = classes.navIconHide
    appBarClassName += ` ${classes.appBarShift}`
  }
  
  return (
    <Fragment>
      <AppBar position='fixed' color='primary' elevation={0} className={appBarClassName}>
        <Toolbar >
          <IconButton
            edge='start'
            color='inherit'
            className={navIconClassName}
            onClick={_handleToggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppDrawer
        className={
          clsx(
            classes.drawer, 
            {
              [className]: isRootPath 
            }
          )
        }
        disablePermanent={disablePermanent} 
        onToggleDrawer={_handleToggleDrawer} 
        drawerOpen={drawerOpen} />
    </Fragment>
  )
}