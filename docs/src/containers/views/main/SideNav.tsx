import React from 'react'
import { Main } from '@krowdy-ui/views'
import { 
  Dashboard as DashboardIcon
} from '@material-ui/icons'

export default function SideNav() {
  return (
    <Main
      menus={[
        {
          icon : <DashboardIcon />,
          title: 'Dashboard',
          url  : '/views/dashboard'
        },
        {
          title: 'Ir a Google',
          url  : 'http://google.com'
        }
      ]}>
      SideNav
    </Main>
  )
}
