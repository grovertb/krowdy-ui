import React from 'react'
import { TopAppBar } from '@krowdy-ui/views'
import { makeStyles } from '@krowdy-ui/styles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
}, { name: 'docs-TopAppBar' })

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TopAppBar
        apps={[
          {
            title: 'Publicar empleo ( ATS )',
            url  : 'https://ats.krowdy.com'
          },
          {
            title: 'Account',
            url  : 'https://myaccount.krowdy.com/'
          },
          {
            title: 'Laborum',
            url  : 'https://chamba.laborum.pe/'
          }
        ]}
        logo={{
          alt   : 'Logo',
          source: 'https://cdn.krowdy.com/auth/logobase.png'
        }}
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
        onHandleLogout={() => {
          console.log('logout')
        }}
        onHandleToggleDrawer={()=> {
          console.log('onHandleToggleDrawer')
        }}
        user={{
          firstName: 'Alfredo',
          lastName : 'Londres'
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
          }
        ]} />
    </div>
  )
}
