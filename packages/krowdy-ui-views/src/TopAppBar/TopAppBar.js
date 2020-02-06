import React from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@krowdy-ui/styles'
import { AppBar, Toolbar, IconButton, Link, Button, Menu, Typography, Divider, MenuItem } from '@krowdy-ui/core'
import {
  Menu as MenuIcon
} from '@material-ui/icons'
import AvatarUser from '../AvatarUser'
import capitalize from '../utils/capitalize'
const useStyles = makeStyles({})

function TopAppBar(props) {
  const {
    color = 'default'
  } = props

  const logo = {}
  const user = {}
  const menuTopLeft = [], menuTopRight = [], userMenu = []

  const history = useHistory()
  const classes = useStyles()

  const [ anchorEl, setAnchorEl ] = React.useState(null)

  console.log('Grover: TopAppBar -> setAnchorEl', setAnchorEl)
  console.log('Grover: TopAppBar -> history', history)

  const _handleClickToggleDrawer = () => {

  }

  const _handleCloseMenu = () => {

  }

  const _handleOpenMenu = () => {

  }

  const _handleLogout = () => {

  }

  const isExternalURL = () => true

  return (
    <AppBar
      className={classes.topBar}
      color={color}
      position='relative'>
      <Toolbar className={classes.toolbar} >
        <IconButton
          aria-label='menu'
          className={classes.hiddenIsMobile}
          color='inherit'
          edge='start'
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
                      onClick={_handleLogout}>
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
  )
}

export default TopAppBar
