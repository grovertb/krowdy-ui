import React from 'react'
import { SampleBar } from '@krowdy-ui/views'
import { Paper, Typography, Tooltip, IconButton, makeStyles } from '@krowdy-ui/core'
import { Info as InfoIcon } from '@material-ui/icons'

const data = [
  {
    _id      : '1',
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 2.3
  },
  {
    _id      : '2',
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 4.5
  },
  {
    _id      : '3',
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 1
  },
  {
    _id      : '4',
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 4
  },
  {
    _id      : '5',
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 3
  },
  {
    _id      : '6',
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 5
  },
  {
    _id      : '7',
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    value: 0.5
  }
]

export default () => {
  const classes = useStyles()

  return (
    <div style={{ width: '90%' }}>
      <Paper className={classes.container} variant='outlined'>
        <div style={{ width: 420 }}>
          <div className={classes.subSection}>
            <Typography variant='h6'>Años de experiencia</Typography>
            <Tooltip title='tooltip'><span><IconButton disabled size='small'><InfoIcon fontSize='small' /></IconButton></span></Tooltip>
          </div>
          <SampleBar
            IconComponent={InfoIcon}
            mark={data[3]}
            marks={data}
            template={({ value }) => `${value} años`} />
        </div>
        <div style={{ width: 420 }}>
          <div className={classes.subSection}>
            <Typography variant='h6'>Promedio de rotación</Typography>
            <Tooltip title='tooltip'><span><IconButton disabled size='small'><InfoIcon fontSize='small' /></IconButton></span></Tooltip>
          </div>
          <SampleBar
            customLabel={(index) => index * 2}
            mark={data[3]}
            marks={data}
            template={({ value }) => `${value} veces por año`} />
        </div>
      </Paper>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    display       : 'flex',
    justifyContent: 'space-between',
    padding       : theme.spacing(1.5),
    width         : '100%'
  },
  subSection: {
    alignItems: 'center',
    display   : 'flex'
  }
}))
