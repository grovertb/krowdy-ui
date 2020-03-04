import React from 'react'
import TopAppBar from '../TopAppBar'
import Main from '../Main'
import { makeStyles } from '@krowdy-ui/core'

const useStyles = makeStyles({
  root: {
    display      : 'flex',
    flexDirection: 'column',
    height       : '100vh',
    overflow     : 'hidden'
  },
  rootFlex: {
    display : 'flex',
    height  : '100%',
    overflow: 'hidden',
    position: 'relative'
  }
}, { name: 'Root' })

function Root(props) {
  const [ openDrawer, setOpenDrawer ] = React.useState(false)

  const {
    children,
    topAppBarProps = {},
    mainProps = {}
  } = props

  const classes = useStyles()

  const _handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <div className={classes.root}>
      <TopAppBar onHandleToggleDrawer={_handleToggleDrawer} {...topAppBarProps} />
      <main className={classes.rootFlex}>
        <Main
          component='div'
          isOpenDrawer={openDrawer}
          {...mainProps}>
          {children}
        </Main>
      </main>
    </div>
  )
}

export default Root
