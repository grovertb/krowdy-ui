import React from 'react'
import clsx from 'clsx'
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons'
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  Divider,
  List,
  ListItem
} from '@krowdy-ui/core'
import { makeStyles } from '@krowdy-ui/styles' 

const drawerWidth = 210

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    overflow  : 'hidden',
    position  : 'relative',
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.enteringScreen,
      easing  : theme.transitions.easing.sharp
    }),
    whiteSpace: 'nowrap',
    width     : drawerWidth,
    zIndex    : 1
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  wrapper: {
    backgroundColor: '#EFEFEF',
    display        : 'flex',
    flex           : 1
  },
  wrapperContent: {
    backgroundColor: '#fff',
    borderRadius   : 4,
    display        : 'flex',
    flex           : 1,
    justifyContent : 'center',
    margin         : 12
    // width          : '100%'
  }
}))

function Dashboard() {
  const classes = useStyles()
  const [ isOpenDrawer, setToggleDrawer ] = React.useState(false)

  const _handleClickToggleDrawer = () => setToggleDrawer(!isOpenDrawer)

  return (
    <div className={classes.main}>
      <AppBar elevation={1} position='sticky'>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.wrapper}>
        <div>
        <Drawer
          classes={{
            paper: clsx(
              classes.drawerPaper,
              {
                [classes.drawerPaperClose]: isOpenDrawer
              }
            )
          }}
          data-test='adminDrawer'
          open={isOpenDrawer}
          variant='permanent' />
          <List
            data-test='adminDrawerItemsList'
            disablePadding>
            <ListItem
              button
              className={classes.drawerContentIcon}
              onClick={_handleClickToggleDrawer}>
              {
                !isOpenDrawer ? <ChevronLeftIcon /> : <MenuIcon />
              }
            </ListItem>
            <Divider />
          </List>
        </div>
        <div className={classes.wrapperContent}>
          {/* {props.children} */}
          Contenido
        </div>
      </div>
    </div>
  )
}

export default Dashboard