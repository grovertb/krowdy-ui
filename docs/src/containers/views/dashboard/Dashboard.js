import React from 'react'
import { Dashboard } from '@krowdy-ui/views'

export default function () {
  const _handleClickLogout = () => console.log('close')
  
  return <Dashboard
    user={{
      firstName: 'Xavi',
      lastName: 'Gonzalez',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFvVFIsVQw4gBlCOw45vcWAGoD75tkHP6dnIx6AYEHUNwLpUG&s',
    }}
    userMenu={[
      {
        target: '_self',
        title: 'View card',
        type: 'link',
        url: '/views/carduser'
      },
      {
        target: '_blank',
        title: 'Google',
        type: 'link',
        url: 'https://google.com'
      },
      {
        action: 'logout',
        title: 'Cerrar sesiòn',
        type: 'action',
        url: '#'
      }
    ]}
    actions={{
      logout: _handleClickLogout
    }}
    logo={{
      alt: 'Logo',
      source: 'https://site.krowdy.com/wp-content/uploads/2019/01/14153940/logoKrowdymenu.png'
    }}
    menuTopLeft={[
      {
        color: 'primary',
        target: '_self',
        title: 'View card',
        type: 'button',
        url: '/views/carduser',
        variant: 'contained'
      },
      {
        target: '_blank',
        title: 'Link Externo',
        type: 'link',
        url: 'https://google.com'
      },
      {
        target: '_blank',
        title: 'Icon',
        type: 'icon',
        url: '/views'
      },
    ]}
    menuTopRight={[
      {
        target: '_self',
        title: 'View card',
        type: 'link',
        url: '/views/carduser'
      },
      {
        color: 'secondary',
        target: '_blank',
        title: 'Google',
        type: 'button',
        url: 'https://google.com',
        variant: 'contained'
      }
    ]}
    menus={[
      {
        icon: 'Home',
        target: '_self',
        title: 'Dashboard',
        type: 'link',
        url: '/views/dashboard'
      },
      {
        icon: 'Group',
        target: '_self',
        title: 'Groups',
        type: 'link',
        url: '/view/groups'
      },
      {
        icon: 'GroudpWork',
        target: '_self',
        title: 'Groups',
        type: 'link',
        url: '/'
      },
      {
        icon: 'GroudpWork',
        target: '_blank',
        title: 'Google',
        type: 'link',
        url: 'https://google.com'
      },
    ]}>
    <h1>Dashboard</h1>
  </Dashboard>
}
