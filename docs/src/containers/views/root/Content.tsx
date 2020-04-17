import React from 'react'
import { Root } from '@krowdy-ui/views'
import {
  Home as HomeIcon,
  AttachMoney as AttachMoneyIcon,
  Backup as BackupIcon,
  CalendarToday as CalendarTodayIcon,
  Folder as FolderIcon,
  Dashboard as DashboardIcon,
  Add as AddIcon
} from '@material-ui/icons'
import { Paper } from '@krowdy-ui/core'

export default function () {
  return (
    <Root
      mainProps={{
        menus: [
          {
            icon : <HomeIcon />,
            title: 'Home',
            url  : '/'
          },
          {
            icon  : <BackupIcon />,
            target: '_blank',
            title : 'Ir a Google',
            url   : 'http://google.com'
          },
          {
            icon : <DashboardIcon />,
            title: 'Root',
            url  : '/views/root'
          },
          {
            icon  : <AttachMoneyIcon />,
            target: '_self',
            title : 'Main',
            url   : '/views/main'
          },
          {
            icon : <CalendarTodayIcon />,
            title: 'Calendar',
            url  : '/'
          },
          {
            icon : <BackupIcon />,
            title: 'Ir a Google',
            url  : 'http://google.com'
          },
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
            icon   : <CalendarTodayIcon />,
            onClick: () => {
              console.log('click')
            },
            title: 'Calendar'
          },
          {
            disabled: true,
            icon    : <BackupIcon />,
            title   : 'Ir a Google',
            url     : 'http://google.com'
          },
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
            icon   : <FolderIcon />,
            options: [
              {
                title: 'Panal Aguijón',
                url  : '/'
              },
              {
                title: 'Panal Polen',
                url  : '/'
              }
            ],
            title: 'Accesos Directos'
          }
        ],
        optionBottom: {
          icon   : <AddIcon />,
          onClick: () => {
            console.log('fixed Button')
          },
          title: 'Crear Empresa'
        }
      }}
      topAppBarProps={{
        logo: {
          alt   : 'Krowdy',
          source: 'https://cdn.krowdy.com/auth/logobase.png'
        },
        menuTopRight: [
          {
            title: 'Grover',
            type : 'link',
            url  : '/views/root'
          },
          {
            target: '_blank',
            title : 'Link',
            type  : 'link',
            url   : 'http://google.com'
          },
          {
            color  : 'primary',
            title  : 'Button',
            type   : 'button',
            variant: 'contained'
          }
        ],
        user: {
          firstName: 'Angel',
          lastName : 'Lopez'
        },
        userMenu: [
          {
            title: 'Hola',
            type : 'link',
            url  : 'http://google.com'
          }
        ]
      }}>
      <Paper style={{ flex: 1 }} variant='outlined'>
        Mi App
      </Paper>
    </Root>
  )
}
