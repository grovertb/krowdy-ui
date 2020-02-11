import React from 'react'
import { Typography } from '@krowdy-ui/core'
import { Main } from '@krowdy-ui/views'
import {
  Home as HomeIcon,
  AttachMoney as AttachMoneyIcon,
  Backup as BackupIcon,
  CalendarToday as CalendarTodayIcon,
  Folder as FolderIcon,
  Dashboard as DashboardIcon,
  Add as AddIcon
} from '@material-ui/icons'
import { makeStyles } from '@krowdy-ui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex'
  }
})

export default function SideNav() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Main
        menus={[
          {
            icon : <HomeIcon />,
            title: 'Home',
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
        ]}
        optionBottom={{
          icon   : <AddIcon />,
          onClick: () => {
            console.log('fixed Button')
          },
          title: 'Crear Empresa'
        }}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </div>
  )
}
