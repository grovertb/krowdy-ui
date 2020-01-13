import React from 'react'
import { Dashboard } from '@krowdy-ui/views'

// import { 
//   Schedule as ScheduleIcon,
//   Home as HomeIcon,
//   AttachMoney as AttachMoneyIcon,
//   Work as WorkIcon,
//   Business as BusinessIcon
// } from '@material-ui/icons'

export default function () {
  const _handleClickLogout = () => console.log("close")
  
  return <Dashboard
    user={{
      firstName: 'Xavi',
      lastName: 'Gonzalez',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFvVFIsVQw4gBlCOw45vcWAGoD75tkHP6dnIx6AYEHUNwLpUG&s',
    }}
    userMenu={[
      {
        type: 'link',
        title: 'View card',
        url: '/views/carduser',
        target: '_self'
      },
      {
        type: 'button',
        title: 'Google',
        url: 'https://google.com',
        target: '_blank'
      },
      {
        type: 'action',
        title: 'Cerrar sesiòn',
        action: 'logout'
      }
    ]}
    actions={{
      logout: _handleClickLogout
    }}
    logo={{
      source: 'https://site.krowdy.com/wp-content/uploads/2019/01/14153940/logoKrowdymenu.png',
      alt: 'Logo'
    }}
    menus={[
      {
        title: 'Dashboard',
        path: '/views/dashboard',
        icon: 'Home'
      },
      {
        title: 'Groups',
        path: '/',
        icon: 'Group'
      },
    ]}
  >
    <h1>Dashboard</h1>
  </Dashboard>
}
