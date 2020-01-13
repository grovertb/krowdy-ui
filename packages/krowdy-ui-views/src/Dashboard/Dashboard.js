import React, {useState, Suspense} from 'react';
import { Link as RouterLink } from 'react-router-dom'
import {lazy} from '@loadable/component'
import clsx from 'clsx'
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Drawer,
  Divider,
  List,
  ListItem,
  Menu,
  Link,
  ListItemIcon,
  ListItemText
} from '@krowdy-ui/core'
import { makeStyles } from '@krowdy-ui/styles' 

const drawerWidth = 210

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
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
  },
  drawerContentIcon: {
    color         : 'rgba(0, 0, 0, 0.54)',
    height        : 50,
    justifyContent: 'flex-end'
  },
  drawerRoot: {
    height: '100%',
  },
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
  drawerPaperClose: {
    width: 56
  },
  main: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
  menuDashboardListItem: {
    paddingBottom: 0,
    paddingTop   : 0
  },
  notificationIcon: {
    '& svg': {
      fontSize: '1.75rem'
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color          : '#262626'
    },
    color: '#8C8C8C'
  },
  profileName: {
    alignItems     : 'center',
    backgroundColor: theme.palette.grey[200],
    border         : `2px solid ${theme.palette.primary.main}`,
    borderRadius   : '50%',
    color          : theme.palette.grey[500],
    display        : 'flex',
    fontSize       : '0.75rem',
    height         : 34,
    justifyContent : 'center',
    position       : 'relative',
    width          : 34
  },
  topBar: {
    backgroundColor: '#fff'
  },
  logoCompany: {
    '& > img': {
      maxHeight: 50,
      maxWidth : 115
    },
    alignItems    : 'center',
    cursor        : 'pointer',
    display       : 'flex',
    height        : 64,
    justifyContent: 'center',
    marginLeft    : theme.spacing(3),
    marginRight   : 10,
    position      : 'relative'
    // width         : '13.78%'
  },
  menuItemContentName: {
    '&:focus': {
      outline: 'none'
    },
    display      : 'flex',
    flexDirection: 'column'
  },
  menuItemName: {
    fontSize  : '1rem',
    fontWeight: 600,
    lineHeight: '1.5',
    minHeight : 'auto',
    padding   : '8px 16px'
  },
  menuLink: {
    '&:hover': {
      textDecoration: 'none'
    },
    '& > a:hover': {
      textDecoration: 'none',
    },
    '& > a': {
      display: 'block',
      width: '100%',
      color         : '#273142',
    },
    padding       : '8px 16px',
    textDecoration: 'none',
    width         : '100%'
  },
  toolbar: {
    display       : 'flex',
    justifyContent: 'space-between',
    paddingRight  : 24 // keep right padding when drawer closed
  },
  menuDashboardItemLink: {
    display: 'flex'
  },
  menuDashboardItem: {
    '&:active': {
      '& > div': {
        color: 'inherit'
      },
      backgroundColor: theme.palette.primary.main,
      color          : 'white'
    },
    alignItems   : 'center',
    display      : 'flex',
    paddingBottom: 10,
    paddingLeft  : 16,
    paddingRight : 16,
    paddingTop   : 10,
    width        : '100%'
  },
  menuDashboardItemActive: {
    '& > div': {
      color: 'inherit'
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main, // '#1890FF',
      color          : 'white'
    },
    backgroundColor: theme.palette.primary.main,
    color          : 'white'
  },
  labelDrawer: {
    '& > span': {
      fontSize: '1rem'
    }
  },
}))



function Dashboard(props) {
  const {
    user,
    userMenu,
    actions,
    logo,
    menus,
    children
  } = props

  const {
    logout
  } = actions

  console.log('Xavi :) ===> :(: Dashboard -> props', props)
  const classes = useStyles()
  const [ isOpenDrawer, setToggleDrawer ] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const _handleClickToggleDrawer = () => setToggleDrawer(!isOpenDrawer)
  const _handleOpenMenu = ev => setAnchorEl(ev.currentTarget)
  const _handleCloseMenu = () => setAnchorEl(null)

  const getIcon = (icon) => {
    const Icon = lazy(() => import(`@material-ui/icons/${icon}`))
    return <Icon />
  }

  return (
    <div className={classes.main}>
      <AppBar
        className={classes.topBar}
        elevation={1}
        position="sticky">
        <Toolbar className={classes.toolbar}>
          <Link className={classes.logoCompany} component={RouterLink} to='/'>
            <img
              alt='Logo Main'
              data-test='logo'
              src={logo.source} />
          </Link>
          <div>
            <IconButton
              aria-controls='simple-menu'
              aria-haspopup='true'
              className={classes.notificationIcon}
              onClick={ev => _handleOpenMenu(ev)}
              color='inherit'>
                {
                  user.photo ? <img className={classes.profileName} src={user.photo} /> :
                  <div className={classes.profileName}>
                    {
                      `${user.firstName ? user.firstName.charAt().toUpperCase() : ''}
                      ${user.lastName ? user.lastName.charAt().toUpperCase() : ''}`
                    }
                  </div>
                }
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                horizontal: 'right',
                vertical  : 'bottom'
              }}
              getContentAnchorEl={null}
              MenuListProps={{
                style: {
                  padding: 0
                }
              }}
              onClose={_handleCloseMenu}
              open={Boolean(anchorEl)}
              transformOrigin={{
                horizontal: 'right',
                vertical  : 'top'
              }}>
                <li
                  className={classes.menuItemContentName}
                  tabIndex={-1}>
                  <Typography
                    className={classes.menuItemName}
                    variant='inherit'>
                    {user.firstName} {user.lastName}
                  </Typography>
                  <Divider />
                </li>

                {
                  userMenu.map((item, n) => {
                    if(item.type === 'action') {
                      if(item.action === 'logout')
                        return <MenuItem
                        key={n}
                        // className={classes.menuLink}
                        onClick={logout}>
                          {item.title}
                        </MenuItem>
                    }else if(item.type === 'button') {
                      return <MenuItem
                      className={classes.menuLink}
                      key={n}>
                      <Link
                        component='a'
                        href={item.url}
                        target={item.target ? item.target : '_blank'}>{item.title}</Link>
                    </MenuItem>
                    }else{
                      return <MenuItem
                      className={classes.menuLink}
                      key={n}>
                        <Link
                          component={RouterLink}
                          to={item.url}>
                          {item.title}
                        </Link>
                      </MenuItem>
                    }
                  })
                }
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.wrapper}>
        <div>
        <Drawer
          classes={{
            root: classes.drawerRoot,
            paper: clsx(
              classes.drawerPaper,
              {
                [classes.drawerPaperClose]: isOpenDrawer
              }
            )
          }}
          data-test='adminDrawer'
          open={isOpenDrawer}
          variant='permanent'>
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
            {
              menus.map((item, n) => <ListItem
                button
                key={n}
                disableGutters
                className={classes.menuDashboardListItem}>
                  <Link
                      className={clsx(
                        classes.menuDashboardItem,
                        {
                          [classes.menuDashboardItemActive]: location.pathname === item.path
                        }
                      )}
                      color='inherit'
                      component={RouterLink}
                      to={item.path}
                      underline='none'>
                        {/* {
                          item.icon ?
                          <ListItemIcon>
                            <Suspense fallback={<div>Loading...</div>}>
                              {
                                getIcon(item.icon)
                              }
                            </Suspense>
                          </ListItemIcon> : null
                        } */}
                      <ListItemText
                        className={classes.labelDrawer}
                        primary={item.title} />
                    </Link>
              </ListItem>)
            }
          </List>
          </Drawer>
        </div>
        <div className={classes.wrapperContent}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;