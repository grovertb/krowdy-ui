import React from 'react'
import { UserPoint } from '@krowdy-ui/views'
import { makeStyles } from '@krowdy-ui/core'

const user = {
  firstName: 'Luis Alfredo',
  lastName : 'Sullca Huaracca',
  photo    :
    'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png'
}

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <UserPoint
          active={true}
          firstName={user.firstName}
          lastName={user.lastName}
          leftPercent={50}
          photo={user.photo}
          size={10}
          subtitle='prueba' />
      </div>
      <div className={classes.card}>
        <UserPoint
          active={false}
          firstName={user.firstName}
          lastName={user.lastName}
          leftPercent={50}
          photo={user.photo}
          size={10}
          subtitle='prueba' />
      </div>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  card: {
    height  : 50,
    position: 'relative',
    width   : 100
  },
  container: {
    backgroundColor: theme.palette.primary.light,
    display        : 'flex',
    flexDirection  : 'row'
  }
}))
