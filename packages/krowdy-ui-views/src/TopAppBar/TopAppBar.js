import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@krowdy-ui/styles'
import { AppBar, Toolbar, IconButton, Link, Button, Menu, Typography, Divider, MenuItem } from '@krowdy-ui/core'
import {
  Menu as MenuIcon,
  Apps as AppsIcon
} from '@material-ui/icons'
import AvatarUser from '../AvatarUser'
import { capitalize, isExternalURL } from '../utils'

const useStyles = makeStyles(theme => ({
  customDivider: {
    background: theme.palette.grey[300],
    height    : 24,
    margin    : theme.spacing(0, 1),
    padding   : 0
  },
  flexCenter: {
    alignItems: 'center',
    display   : 'flex'
  },
  hiddenUpMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
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
    position: 'relative'
  },
  linkLabelActive: {
    '&:after': {
      transform: 'scaleX(1)'
    },
    color: theme.palette.primary.main
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
    justifyContent: 'center',
    margin        : theme.spacing(0, 2),
    position      : 'relative'
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
    lineHeight: 1.5,
    padding   : theme.spacing(.75, 2)
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
    // '& svg': {
    //   fontSize: '1.75rem'
    // },
    // '&:hover': {
    //   backgroundColor: 'transparent',
    //   color          : theme.palette.grey[500]
    // },
    color  : theme.palette.grey[600],
    padding: theme.spacing(1)
  },
  toolbarCenter: {
    display       : 'flex',
    flex          : 1,
    justifyContent: 'space-between'
  },
  toolbarCenterLeft: {
    '& > a, & > div': {
      '&:first-child': {
        marginLeft: 0
      },
      display   : 'inline',
      marginLeft: theme.spacing(1)
    },
    padding: theme.spacing(0, 1)
  },
  toolbarCenterRight: {
    '& > a, & > div': {
      '&:last-child': {
        marginRight: 0
      },
      display    : 'inline',
      marginRight: theme.spacing(1)
    },
    padding: theme.spacing(0, 1)
  },
  topBar: {
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)'
  }
}), { name: 'TopAppBar' })

function TopAppBar(props) {
  const {
    apps = [],
    color = 'inherit',
    logo = {},
    menuTopLeft = [],
    menuTopRight = [],
    onHandleLogout,
    onHandleToggleDrawer,
    persistMenuIcon = false,
    user = {},
    userMenu = []
  } = props

  const location = useLocation()
  const classes = useStyles()

  const [ anchorEl, setAnchorEl ] = React.useState({
    apps: null,
    user: null
  })

  const [ menuActive, setMenuActive ] = React.useState(null)

  const _handleOpenMenu = (ev, key) => {
    setAnchorEl({
      ...anchorEl,
      [key]: ev.currentTarget
    })

    setMenuActive(key)
  }

  const _handleCloseMenu = () => {
    setAnchorEl({
      apps: null,
      user: null
    })

    setMenuActive(null)
  }

  return (
    <AppBar
      className={classes.topBar}
      color={color}
      position='relative'>
      <Toolbar className={classes.toolbar} >
        {
          onHandleToggleDrawer ?
            <IconButton
              aria-label='menu'
              className={clsx({
                [classes.hiddenUpMobile]: !persistMenuIcon
              })}
              color='inherit'
              edge='start'
              onClick={onHandleToggleDrawer}>
              <MenuIcon />
            </IconButton>:
            null
        }
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
                const auxProps = item.url ?
                  isExternalURL(item.url) ?
                    {
                      href: item.url
                    } :
                    {
                      component: RouterLink,
                      to       : item.url
                    } :
                  {}

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
                              [ classes[`linkLabel${capitalize(item.color || '')}`] ]: Boolean(item.color),
                              [ classes.linkLabelActive ]                            : item.url === location.pathname
                            },
                          )
                        }
                        color={item.color ? item.color : 'inherit'}
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
        {
          menuTopRight.length ? <Divider className={classes.customDivider} orientation='vertical' /> : null
        }
        <div>

          {
            apps.length ? (
              <IconButton
                aria-controls='menu-apps'
                aria-haspopup='true'
                onClick={ev => _handleOpenMenu(ev, 'apps')}>
                <AppsIcon />
              </IconButton>
            ) : null
          }
          <IconButton
            aria-controls='menu-user'
            aria-haspopup='true'
            className={classes.notificationIcon}
            color='inherit'
            onClick={ev => _handleOpenMenu(ev, 'user')}>
            <AvatarUser user={user} />
          </IconButton>
          <Menu
            anchorEl={anchorEl[menuActive]}
            anchorOrigin={{
              horizontal: 'right',
              vertical  : 'bottom'
            }}
            getContentAnchorEl={null}
            // keepMounted
            MenuListProps={{
              style: {
                padding: 0
              }
            }}
            onClose={_handleCloseMenu}
            open={Boolean(anchorEl[menuActive])}
            transformOrigin={{
              horizontal: 'right',
              vertical  : 'top'
            }}>
            {
              menuActive === 'user' ? (
                [
                  <li
                    className={classes.menuItemContentName}
                    key='user-menu-1'
                    tabIndex={-1}>
                    <Typography
                      className={classes.menuItemName}
                      variant='inherit'>
                      {user.firstName} {user.lastName}
                    </Typography>
                    <Divider />
                  </li>,
                  userMenu.map((item, index) => (
                    <MenuItem
                      className={classes.menuLink}
                      key={`user-menu-2-${index}`}>
                      {
                        isExternalURL(item.url) ?
                          <Link
                            component='a'
                            href={item.url}
                            target={item.target || '_blank'}>
                            {item.title}
                          </Link> :
                          <Link
                            component={RouterLink}
                            to={item.url}>
                            {item.title}
                          </Link>
                      }
                    </MenuItem>
                  )),
                  onHandleLogout ?
                    <MenuItem
                      className={classes.menuLink}
                      key='user-menu-3'
                      onClick={onHandleLogout}>
                        Cerrar Sesión
                    </MenuItem>:
                    null
                ]
              ) :
                menuActive === 'apps' ?
                  apps.map((app, index) => (
                    <MenuItem
                      className={classes.menuLink}
                      key={`app-menu-${index}`}>
                      <Link
                        component='a'
                        href={app.url}
                        target={app.target || '_blank'}>
                        {app.title}
                      </Link>
                    </MenuItem>
                  )) :
                  null
            }
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

TopAppBar.propTypes = {
  apps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url  : PropTypes.string
    })
  ),
  color: PropTypes.oneOf([ 'default', 'inherit', 'primary', 'secondary', 'krowdy', 'error' ]),
  logo : PropTypes.shape({
    alt   : PropTypes.string,
    source: PropTypes.string
  }),
  menuTopLeft: PropTypes.arrayOf(
    PropTypes.shape({
      color  : PropTypes.string,
      target : PropTypes.string,
      title  : PropTypes.string.isRequired,
      type   : PropTypes.string,
      url    : PropTypes.string,
      variant: PropTypes.string
    })
  ),
  menuTopRight: PropTypes.arrayOf(
    PropTypes.shape({
      color  : PropTypes.string,
      target : PropTypes.string,
      title  : PropTypes.string.isRequired,
      type   : PropTypes.string,
      url    : PropTypes.string,
      variant: PropTypes.string
    })
  ),
  onHandleLogout      : PropTypes.func,
  onHandleToggleDrawer: PropTypes.func,
  user                : PropTypes.shape({
    firstName: PropTypes.string,
    lastName : PropTypes.string,
    photo    : PropTypes.string
  }),
  userMenu: PropTypes.arrayOf(
    PropTypes.shape({
      target: PropTypes.string,
      title : PropTypes.string.isRequired,
      type  : PropTypes.string.isRequired,
      url   : PropTypes.string.isRequired
    })
  )
}

export default TopAppBar
