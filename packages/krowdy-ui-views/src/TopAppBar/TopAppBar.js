import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink/* , useHistory*/ } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@krowdy-ui/styles'
import { AppBar, Toolbar, IconButton, Link, Button, Menu, Typography, Divider, MenuItem } from '@krowdy-ui/core'
import {
  Menu as MenuIcon
} from '@material-ui/icons'
import AvatarUser from '../AvatarUser'
import { capitalize, isExternalURL } from '../utils'

const useStyles = makeStyles(theme => ({
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
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)'
  }
}), { name: 'TopAppBar' })

function TopAppBar(props) {
  const {
    color = 'default',
    logo = {},
    user = {},
    onHandleToggleDrawer,
    onHandleLogout,
    userMenu = [],
    menuTopRight = [],
    menuTopLeft = []
  } = props

  // const history = useHistory()
  const classes = useStyles()

  const [ anchorEl, setAnchorEl ] = React.useState(null)

  const _handleOpenMenu = ev => setAnchorEl(ev.currentTarget)
  const _handleCloseMenu = () => setAnchorEl(null)

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
              className={classes.hiddenIsMobile}
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
              userMenu.map((item, index) => (
                <MenuItem
                  className={classes.menuLink}
                  key={`user-menu-${index}`}>
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
              ))
            }
            {
              onHandleLogout ?
                <MenuItem
                  className={classes.menuLink}
                  onClick={onHandleLogout}>
                  Cerrar Sesión
                </MenuItem>:
                null
            }
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

TopAppBar.propTypes = {
  color: PropTypes.oneOf([ 'default', 'inherit', 'primary', 'secondary', 'krowdy', 'error' ]),
  logo : PropTypes.shape({
    alt   : PropTypes.string,
    source: PropTypes.string
  }),
  onHandleLogout      : PropTypes.func,
  onHandleToggleDrawer: PropTypes.func,
  user                : PropTypes.shape({
    firstName: PropTypes.string,
    lastName : PropTypes.string,
    photo    : PropTypes.string
  })
}

export default TopAppBar
