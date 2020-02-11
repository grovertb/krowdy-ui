import React from 'react'
import { Paper } from '@krowdy-ui/core'
import { Dashboard } from '@krowdy-ui/views'
import {
  AttachMoney as AttachMoneyIcon,
  Backup as BackupIcon,
  CalendarToday as CalendarTodayIcon,
  Dashboard as DashboardIcon
} from '@material-ui/icons'

export default function () {
  const _handleClickLogout = () => console.log('close')

  return (
    <Dashboard
      actions={{
        logout: _handleClickLogout
      }}
      logo={{
        alt   : 'Logo',
        source: 'https://cdn.krowdy.com/auth/logobase.png'
      }}
      menus={[
        {
          icon : <DashboardIcon />,
          title: 'Dashboard',
          url  : '/views/dashboard'
        },
        {
          icon  : <AttachMoneyIcon />,
          target: '_self',
          title : 'Groups',
          url   : 'https://google.com'
        },
        {
          icon : <CalendarTodayIcon />,
          title: 'Calendar',
          url  : '/'
        },
        {
          icon  : <BackupIcon />,
          target: '_blank',
          title : 'Google',
          url   : 'https://google.com'
        }
      ]}
      menuTopLeft={[
        {
          color  : 'secondary',
          target : '_self',
          title  : 'View card',
          type   : 'button',
          url    : '/views/carduser',
          variant: 'contained'
        },
        {
          target: '_blank',
          title : 'Link Externo',
          type  : 'link',
          url   : 'https://google.com'
        },
        {
          target: '_blank',
          title : 'Link',
          type  : 'link',
          url   : '/views'
        }
      ]}
      menuTopRight={[
        {
          target: '_self',
          title : 'View card',
          type  : 'link',
          url   : '/views/carduser'
        },
        {
          color  : 'krowdy',
          target : '_blank',
          title  : 'Google',
          type   : 'button',
          url    : 'https://google.com',
          variant: 'contained'
        }
      ]}
      user={{
        firstName: 'Xavi',
        lastName : 'Gonzalez'
      }}
      userMenu={[
        {
          target: '_self',
          title : 'View card',
          type  : 'link',
          url   : '/views/carduser'
        },
        {
          target: '_blank',
          title : 'Google',
          type  : 'link',
          url   : 'https://google.com'
        },
        {
          action: 'logout',
          title : 'Cerrar sesión',
          type  : 'action',
          url   : '#'
        }
      ]}>
      <Paper style={{ flex: 1 }} variant='outlined'>
        <h1>Dashboard</h1>
      </Paper>
    </Dashboard>
  )
}
