import React, {useState} from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@krowdy-ui/styles' 
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
  Button,
  // ListItemIcon,
  ListItemText,
  // Icon
} from '@krowdy-ui/core'

const drawerWidth = 210

const useStyles = makeStyles(theme => ({
  drawerContentIcon: {
    color         : theme.palette.common.white,
    height        : 50,
    justifyContent: 'flex-end'
  },
  drawerPaper: {
    background: theme.palette.primary.main,
    borderRight: '0',
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
  drawerRoot: {
    height: '100%',
  },
  labelDrawer: {
    '& > span': {
      fontSize: '1rem'
    }
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
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuDashboardItem: {
    '&:active': {
      '& > div': {
        color: 'inherit'
      },
      backgroundColor: theme.palette.primary.main,
    },
    alignItems   : 'center',
    color          : theme.palette.common.white,
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
    // '&:hover': {
    //   backgroundColor: theme.palette.primary.main, // '#1890FF',
    //   color          : 'white'
    // },
    backgroundColor: theme.palette.common.white,
    color          : theme.palette.primary.main
  },
  menuDashboardItemLink: {
    display: 'flex'
  },
  menuDashboardListItem: {
    paddingBottom: 0,
    paddingTop   : 0
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
    '& > a': {
      color         : '#273142',
      display: 'block',
      width: '100%',
    },
    '& > a:hover': {
      textDecoration: 'none',
    },
    '&:hover': {
      textDecoration: 'none'
    },
    padding       : '8px 16px',
    textDecoration: 'none',
    width         : '100%'
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
  root: {
    flexGrow: 1,
  },
  title: {
    color: theme.palette.primary.main,
    flexGrow: 1,
  },
  toolbar: {
    display       : 'flex',
    justifyContent: 'space-between',
    paddingRight  : 24 // keep right padding when drawer closed
  },
  toolbarCenter: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    padding: '0 10px',
  },
  toolbarCenterLeft: {
    '& > a': {
      marginLeft: '10px'
    },
      '& > a:first-child': {
      marginLeft: '0'
    },
    display: 'flex',
    padding: '0 10px'
  },
  toolbarCenterRight: {
    '& > a': {
      marginRight: '10px'
    },
      '& > a:last-child': {
      marginRight: '0'
    },
    display: 'flex'
  },
  topBar: {
    backgroundColor: '#fff'
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

const validURL = str => new RegExp('^(https?:\\/\\/)?' +
'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
'((\\d{1,3}\\.){3}\\d{1,3}))' +
'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
'(\\?[;&a-z\\d%_.~+=-]*)?' +
'(\\#[-a-z\\d_]*)?$', 'i').test(str)

function Dashboard(props) {
  const {
    user,
    userMenu = [],
    actions,
    logo,
    menus = [],
    menuTopLeft = [],
    menuTopRight = [],
    children
  } = props
  
  const {
    logout
  } = actions

  const history = useHistory()
  
  const {
    location
  } = history

  const classes = useStyles()
  const [ isOpenDrawer, setToggleDrawer ] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const _handleClickToggleDrawer = () => setToggleDrawer(!isOpenDrawer)
  const _handleOpenMenu = ev => setAnchorEl(ev.currentTarget)
  const _handleCloseMenu = () => setAnchorEl(null)

  return (
    <div className={classes.main}>
      <AppBar
        className={classes.topBar}
        elevation={1}
        position='sticky'>
        <Toolbar className={classes.toolbar}>
          <Link className={classes.logoCompany} component={RouterLink} to='/'>
            <img
              alt='Logo Main'
              data-test='logo'
              src={logo.source} />
          </Link>
          <div className={classes.toolbarCenter}>
            <div className={classes.toolbarCenterLeft}>
            {
              menuTopLeft.length ?
              menuTopLeft.map((item, n) => {
                switch (item.type) {
                  case 'button':
                    if(validURL(item.url)) {
                      return <Button
                          key={n}
                          color='primary'
                          variant='contained'
                          href={item.url}
                          target={item.target ? item.target : '_blank'}>{item.title}</Button>
                    }else {
                      return <Button
                          key={n}
                          color='primary'
                          variant='contained'
                          component={RouterLink}
                          to={item.url}>
                        {item.title}
                      </Button>
                    }
                
                  default:
                    if(validURL(item.url)) {
                      return <Button
                          key={n}
                          href={item.url}
                          target={item.target ? item.target : '_blank'}>{item.title}</Button>
                    }else {
                      return <Button
                        key={n}
                        component={RouterLink}
                        to={item.url}>
                        {item.title}
                      </Button>
                    }
                }
              }) : null
            }
            </div>
            <div className={classes.toolbarCenterRight}>
            {
              menuTopRight.length ?
              menuTopRight.map((item, n) => {
                switch (item.type) {
                  case 'button':
                    if(validURL(item.url)) {
                      return <Button
                          key={n}
                          color='primary'
                          variant='contained'
                          href={item.url}
                          target={item.target ? item.target : '_blank'}>{item.title}</Button>
                    }else {
                      return <Button
                          key={n}
                          color='primary'
                          variant='contained'
                          component={RouterLink}
                          to={item.url}>
                        {item.title}
                      </Button>
                    }
                
                  default:
                    if(validURL(item.url)) {
                      return <Button
                          key={n}
                          href={item.url}
                          target={item.target ? item.target : '_blank'}>{item.title}</Button>
                    }else {
                      return <Button
                        key={n}
                        component={RouterLink}
                        to={item.url}>
                        {item.title}
                      </Button>
                    }
                }
              }) : null
            }
            </div>
          </div>
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
                  userMenu.length ?
                  userMenu.map((item, n) => (
                    item.type === 'action' ?
                      <MenuItem
                        key={n}
                        className={classes.menuLink}
                        onClick={logout}>
                          {item.title}
                        </MenuItem> :
                        validURL(item.url) ?
                          <MenuItem
                            className={classes.menuLink}
                            key={n}>
                            <Link
                              component='a'
                              href={item.url}
                              target={item.target ? item.target : '_blank'}>{item.title}</Link>
                          </MenuItem> :
                          <MenuItem
                            className={classes.menuLink}
                            key={n}>
                            <Link
                              component={RouterLink}
                              to={item.url}>
                              {item.title}
                            </Link>
                          </MenuItem>
                  )) : null
                }
            </Menu>
          </div>
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
            ),
            root: classes.drawerRoot
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
              menus.length ?
              menus.map((item, n) => (
                validURL(item.url) ?
                  <ListItem
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
                        component='a'
                        href={item.url}
                        target={item.target ? item.target : '_blank'}
                        underline='none'>
                          {/* {
                            item.icon ?
                            <ListItemIcon>
                              <Icon icon={item.icon} />
                            </ListItemIcon> : null
                          } */}
                        <ListItemText
                          className={classes.labelDrawer}
                          primary={item.title} />
                      </Link>
                </ListItem> :
                <ListItem
                  button
                  key={n}
                  disableGutters
                  className={classes.menuDashboardListItem}>
                    <Link
                        className={clsx(
                          classes.menuDashboardItem,
                          {
                            [classes.menuDashboardItemActive]: location.pathname === item.url
                          }
                        )}
                        color='inherit'
                        component={RouterLink}
                        to={item.url}
                        underline='none'>
                          {/* {
                            item.icon ?
                            <ListItemIcon>
                              <Icon icon={item.icon} />
                            </ListItemIcon> : null
                          } */}
                        <ListItemText
                          className={classes.labelDrawer}
                          primary={item.title} />
                      </Link>
                </ListItem>
              )) : null
            }
          </List>
          </Drawer>
        </div>
        <div className={classes.wrapperContent}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Dashboard