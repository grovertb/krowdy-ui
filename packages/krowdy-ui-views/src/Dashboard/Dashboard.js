import React, { useState } from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@krowdy-ui/styles'
import {
  Menu as MenuIcon
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
  ListItemIcon,
  ListItemText
  // Icon
} from '@krowdy-ui/core'
import { AvatarUser } from '@krowdy-ui/views'
import capitalize from '../utils/capitalize'

const drawerWidth = 210
const drawerWidthMin = 56

const useStyles = makeStyles(theme => ({
  drawerContent: {
    width: drawerWidthMin
  },
  // drawerContentIcon: {
  //   '&:hover': {
  //     backgroundColor: theme.palette.primary[600]
  //   },
  //   backgroundColor: theme.palette.primary[600],
  //   color          : theme.palette.common.white,
  //   height         : 50,
  //   justifyContent : 'flex-end'
  // },
  drawerIcon: {
    color: 'inherit'
  },
  drawerLabel: {
    '& > span': {
      fontSize: '1rem'
    },
    transition: 'transform 300ms ease 0s, opacity 300ms ease 0s'
  },
  drawerPaper: {
    '&:hover': {
      '& $drawerLabel': {
        opacity  : 1,
        transform: 'translate3d(0px, 0, 0)'
      },
      boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
      width    : drawerWidth
    },
    background : theme.palette.primary.main,
    borderRight: '0',
    overflow   : 'hidden',
    position   : 'absolute',
    transition : theme.transitions.create('width', {
      duration: theme.transitions.duration.standard,
      easing  : theme.transitions.easing.easeInOut
    }),
    whiteSpace: 'nowrap',
    width     : drawerWidth,
    zIndex    : 10
  },
  drawerPaperClose: {
    '& $drawerLabel': {
      opacity  : 0,
      transform: 'translate3d(-25px, 0, 0)'
    },
    width: drawerWidthMin
  },
  hiddenUpMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  iconMenu: {
    color: theme.palette.common.white
  },
  linkLabel: {
    '&:after': {
      backgroundColor: theme.palette.primary.main,
      bottom         : -2,
      content        : '""',
      height         : 1,
      left           : 0,
      position       : 'absolute',
      right          : 0,
      transform      : 'scaleX(0)',
      transition     : 'all .2s ease 0s'
    },
    '&:hover': {
      '&:after': {
        transform: 'scaleX(1)'
      }
    },
    cursor  : 'pointer',
    position: 'relative'
  },
  linkLabelSecondary: {
    '&:after': {
      backgroundColor: theme.palette.secondary.main
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
    // marginLeft    : theme.spacing(3),
    // marginRight   : 10,
    margin        : theme.spacing(0, 1),
    position      : 'relative'
  },
  main: {
    [theme.breakpoints.down('sm')]: {
      overflow: 'auto'
    },
    backgroundColor: theme.palette.grey[200],
    display        : 'flex',
    flex           : 1,
    height         : '100%',
    overflow       : 'hidden',
    position       : 'relative'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  menuDashboardItem: {
    alignItems: 'center',
    display   : 'flex',
    padding   : theme.spacing(1, 2),
    width     : '100%'
  },
  menuDashboardItemLink: {
    display: 'flex'
  },
  menuDashboardListItem: {
    // '&:hover': {
    //   backgroundColor: theme.palette.primary[600]
    // },
    color  : theme.palette.common.white,
    padding: 0
  },
  menuDashboardListItemActive: {
    '&:hover': {
      backgroundColor: theme.palette.common.white
    },
    // '& > div': {
    //   color: 'inherit'
    // },
    // '&:active': {
    //   backgroundColor: theme.palette.common.white,
    //   color          : theme.palette.primary.main
    // },
    backgroundColor: theme.palette.common.white,
    color          : theme.palette.primary.main
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
    padding   : theme.spacing(1, 2)
  },
  menuLink: {
    '& > a': {
      color  : theme.palette.grey[800],
      display: 'block',
      width  : '100%'
    },
    '& > a:hover': {
      textDecoration: 'none'
    },
    '&:hover': {
      textDecoration: 'none'
    },
    padding       : theme.spacing(1, 2),
    textDecoration: 'none',
    width         : '100%'
  },
  notificationIcon: {
    '& svg': {
      fontSize: '1.75rem'
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color          : theme.palette.grey[500]
    },
    color: theme.palette.grey[600]
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
    display                       : 'flex',
    flexDirection                 : 'column',
    height                        : '100vh',
    overflow                      : 'hidden',
    width                         : '100%',
    [theme.breakpoints.down('sm')]: {
      height   : '100%',
      minHeight: '100vh'
    }
  },
  title: {
    color   : theme.palette.primary.main,
    flexGrow: 1
  },
  toolbar: {
    display       : 'flex',
    justifyContent: 'space-between',
    paddingRight  : 24 // keep right padding when drawer closed
  },
  toolbarCenter: {
    display       : 'flex',
    flex          : 1,
    justifyContent: 'space-between'
    // padding       : theme.spacing(0, 1)
  },
  toolbarCenterLeft: {
    '& > a': {
      '&:first-child': {
        marginLeft: 0
      },
      marginLeft: theme.spacing(1)
    },
    padding: theme.spacing(0, 1)
  },
  toolbarCenterRight: {
    '& > a': {
      '&:last-child': {
        marginRight: 0
      },
      marginRight: theme.spacing(1)
    },
    padding: theme.spacing(0, 1)
  },
  topBar: {
    backgroundColor: theme.palette.common.white,
    boxShadow      : '0px 2px 5px rgba(0, 0, 0, 0.1)'
  },
  wrapperContent: {
    [theme.breakpoints.down('sm')]: {
      overflow: 'initial'
    },
    borderRadius  : 4,
    display       : 'flex',
    flex          : 1,
    justifyContent: 'center',
    // margin        : theme.spacing(1),
    // overflow      : 'auto',
    overflow      : 'hidden',
    padding       : theme.spacing(1),
    position      : 'relative'
    // width         : `calc(100% - ${drawerWidthMin}px)`
  }
}), { name: 'Dashboard' })

const isExternalURL = str => new RegExp('^(https?:\\/\\/)?' +
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
  '((\\d{1,3}\\.){3}\\d{1,3}))' +
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
  '(\\?[;&a-z\\d%_.~+=-]*)?' +
  '(\\#[-a-z\\d_]*)?$', 'i').test(str)

function Dashboard(props) {
  const {
    user = {},
    userMenu = [],
    actions = {},
    logo = {},
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
  const [ anchorEl, setAnchorEl ] = useState(null)

  const _handleClickToggleDrawer = () => setToggleDrawer(!isOpenDrawer)
  const _handleOpenMenu = ev => setAnchorEl(ev.currentTarget)
  const _handleCloseMenu = () => setAnchorEl(null)

  const _handlePreventRoute = mUrl => (ev) => {
    if(location.pathname === mUrl) ev.preventDefault()
  }

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.topBar}
        color='default'
        position='relative'>
        <Toolbar className={classes.toolbar} >
          <IconButton
            aria-label='menu' className={classes.hiddenUpMobile} edge='start'
            onClick={_handleClickToggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Link className={classes.logoCompany} component={RouterLink} to='/'>
            <img
              alt='Logo Main'
              src={logo.source} />
          </Link>
          <div className={classes.toolbarCenter}>
            <div className={classes.toolbarCenterLeft}>
              {
                menuTopLeft.map((item, index) => {
                  const auxProps = isExternalURL(item.url) ?
                    {
                      href: item.url
                    } :
                    {
                      component: RouterLink,
                      to       : item.url
                    }

                  return (
                    item.type  === 'button' ?
                      <Button
                        color={item.color ? item.color : 'default'}
                        key={`menu-top-left-${index}`}
                        target={item.target ? item.target : '_blank'}
                        variant={item.variant ? item.variant : 'text'}
                        {...auxProps}>
                        {item.title}
                      </Button> :
                      item.type === 'link' ?
                        <Link
                          className={
                            clsx(
                              classes.linkLabel,
                              {
                                [ classes[`linkLabel${capitalize(item.color || '')}`] ]: Boolean(item.color)
                              }
                            )
                          }
                          color={item.color ? item.color : undefined}
                          key={`menu-top-left-${index}`}
                          target={item.target}
                          underline='none'
                          {...auxProps}>
                          {item.title}
                        </Link> :
                        <div key={`menu-top-left-${index}`}>{item.title}</div>
                  )
                })
              }
            </div>
            <div className={classes.toolbarCenterRight}>
              {
                menuTopRight.map((item, index) => {
                  const auxProps = isExternalURL(item.url) ?
                    {
                      href: item.url
                    } :
                    {
                      component: RouterLink,
                      to       : item.url
                    }

                  return (
                    item.type  === 'button' ?
                      <Button
                        color={item.color ? item.color : 'default'}
                        key={`menu-top-right-${index}`}
                        variant={item.variant ? item.variant : 'text'}
                        {...auxProps}>
                        {item.title}
                      </Button> :
                      item.type === 'link' ?
                        <Link
                          className={
                            clsx(
                              classes.linkLabel,
                              {
                                [ classes[`linkLabel${capitalize(item.color || '')}`] ]: Boolean(item.color)
                              }
                            )
                          }
                          color={item.color ? item.color : undefined}
                          key={`menu-top-right-${index}`}
                          rel={item.target === '_blank' ? 'noopener' : undefined}
                          target={item.target}
                          underline='none'
                          {...auxProps}>
                          {item.title}
                        </Link> :
                        <div key={`menu-top-right-${index}`}>{item.title}</div>
                  )
                })
              }
            </div>
          </div>
          <div>
            <IconButton
              aria-controls='simple-menu'
              aria-haspopup='true'
              className={classes.notificationIcon}
              color='inherit'
              onClick={_handleOpenMenu}>
              <AvatarUser user={user} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                horizontal: 'right',
                vertical  : 'bottom'
              }}
              getContentAnchorEl={null}
              keepMounted
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
                        className={classes.menuLink}
                        key={n}
                        onClick={logout}>
                        {item.title}
                      </MenuItem> :
                      isExternalURL(item.url) ?
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
      <main className={classes.main}>
        <div className={classes.drawerContent}>
          <Drawer
            classes={{
              paper: clsx(
                classes.drawerPaper,
                {
                  [classes.drawerPaperClose]: !isOpenDrawer
                }
              )
            }}
            open={isOpenDrawer}
            variant='permanent'>
            <List disablePadding>
              {/* <ListItem
              button
              className={classes.drawerContentIcon}
              onClick={_handleClickToggleDrawer}>
              {
                isOpenDrawer ? <ChevronLeftIcon /> : <MenuIcon />
              }
            </ListItem>
            <Divider /> */}
              {
                menus.map((item, index) => {
                  const linkProps = isExternalURL(item.url) ?
                    {
                      href: item.url
                    } :
                    {
                      component: RouterLink,
                      to       : item.url
                    }

                  return (
                    (
                      <ListItem
                        button
                        className={clsx(
                          classes.menuDashboardListItem,
                          {
                            [classes.menuDashboardListItemActive]: location.pathname === item.url
                          }
                        )}
                        disableGutters
                        key={index}>
                        <Link
                          className={classes.menuDashboardItem}
                          color='inherit'
                          onClick={_handlePreventRoute(item.url)}
                          target={item.target}
                          underline='none'
                          {...linkProps}>
                          {
                            item.icon ?
                              <ListItemIcon className={classes.drawerIcon}>
                                {item.icon}
                              </ListItemIcon> :
                              null
                          }
                          <ListItemText
                            className={classes.drawerLabel}
                            primary={item.title} />
                        </Link>
                      </ListItem>
                    )
                  )
                })
              }
            </List>
          </Drawer>
        </div>
        <div className={classes.wrapperContent}>
          {children}
        </div>
      </main>
    </div>
  )
}

Dashboard.propTypes = {
  actions: PropTypes.shape({
    logout: PropTypes.func
  }),
  classes: PropTypes.object,
  logo   : PropTypes.shape({
    alt   : PropTypes.string,
    source: PropTypes.string
  }),
  menuTopLeft: PropTypes.arrayOf(
    PropTypes.shape({
      color  : PropTypes.string,
      target : PropTypes.string,
      title  : PropTypes.string.isRequired,
      type   : PropTypes.string.isRequired,
      url    : PropTypes.string.isRequired,
      variant: PropTypes.string
    })
  ),
  menuTopRight: PropTypes.arrayOf(
    PropTypes.shape({
      color  : PropTypes.string,
      target : PropTypes.string,
      title  : PropTypes.string.isRequired,
      type   : PropTypes.string.isRequired,
      url    : PropTypes.string.isRequired,
      variant: PropTypes.string
    })
  ),
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      icon  : PropTypes.element,
      target: PropTypes.string,
      title : PropTypes.string.isRequired,
      // type  : PropTypes.string.isRequired,
      url   : PropTypes.string.isRequired
    })
  ),
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName : PropTypes.string,
    photo    : PropTypes.string
  }),
  userMenu: PropTypes.arrayOf(
    PropTypes.shape({
      action: PropTypes.string,
      target: PropTypes.string,
      title : PropTypes.string.isRequired,
      type  : PropTypes.string.isRequired,
      url   : PropTypes.string.isRequired
    })
  )
}

Dashboard.muiName = 'Dashboard'

export default Dashboard
