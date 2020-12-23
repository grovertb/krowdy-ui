import React from 'react'
import { BubbleChart } from '@krowdy-ui/views'
import { IconButton, makeStyles, Paper, Tooltip, Typography } from '@krowdy-ui/core'
import {
  Info as InfoIcon
} from '@material-ui/icons'

const skills = [
  {
    id  : 1,
    name: 'Figma'
  }, {
    id  : 2,
    name: 'After Effects'
  },
  {
    id  : 3,
    name: 'Rhinoceros'
  }, {
    id  : 4,
    name: 'Ilustrator'
  }
]

const candidates = [
  {
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    selected       : false,
    skillsCandidate: [
      {
        name      : 'Figma',
        scaleOrder: 2,
        value     : 'Principiante'
      }, {
        name      : 'After Effects',
        scaleOrder: 3,
        value     : 'Intermedio'
      },
      {
        name      : 'Rhinoceros',
        scaleOrder: 1,
        value     : 'Intermedio'
      }, {
        name      : 'Ilustrator',
        scaleOrder: 4,
        value     : 'Lider'
      }
    ],
    value: 2.3
  },
  {
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    selected       : true,
    skillsCandidate: [
      {
        name      : 'Figma',
        scaleOrder: 1,
        value     : 'Principiante'
      }, {
        name      : 'After Effects',
        scaleOrder: 3,
        value     : 'Intermedio'
      },
      {
        name      : 'Rhinoceros',
        scaleOrder: 3,
        value     : 'Intermedio'
      }, {
        name      : 'Ilustrator',
        scaleOrder: 4,
        value     : 'Lider'
      }
    ],
    value: 2.3
  },
  {
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    selected       : false,
    skillsCandidate: [
      {
        name      : 'Figma',
        scaleOrder: 1,
        value     : 'Principiante'
      }, {
        name      : 'After Effects',
        scaleOrder: 3,
        value     : 'Intermedio'
      },
      {
        name      : 'Rhinoceros',
        scaleOrder: 3,
        value     : 'Intermedio'
      }, {
        name      : 'Ilustrator',
        scaleOrder: 4,
        value     : 'Lider'
      }
    ],
    value: 2.3
  },
  {
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    selected       : false,
    skillsCandidate: [
      {
        name      : 'Figma',
        scaleOrder: 1,
        value     : 'Principiante'
      }, {
        name      : 'After Effects',
        scaleOrder: 3,
        value     : 'Intermedio'
      },
      {
        name      : 'Rhinoceros',
        scaleOrder: 3,
        value     : 'Intermedio'
      }, {
        name      : 'Ilustrator',
        scaleOrder: 4,
        value     : 'Lider'
      }
    ],
    value: 2.3
  },
  {
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    selected       : false,
    skillsCandidate: [
      {
        name      : 'Figma',
        scaleOrder: 2,
        value     : 'Principiante'
      },
      {
        name      : 'Rhinoceros',
        scaleOrder: 3,
        value     : 'Intermedio'
      }, {
        name      : 'Ilustrator',
        scaleOrder: 4,
        value     : 'Lider'
      }
    ],
    value: 2.3
  }
]

export default function() {
  const classes = useStyles()

  return (
    <div style={{ width: 452 }}>
      <Paper className={classes.container} variant='outlined'>
        <div>
          <div className={classes.subSection}>
            <Typography variant='h6'>Conocimientos</Typography>
            <Tooltip placement='top' title='tooltip'><span><IconButton disabled size='small'><InfoIcon fontSize='small' /></IconButton></span></Tooltip>
          </div>
          <BubbleChart candidates={candidates} max={4} skills={skills} />
        </div>
      </Paper>
      <Paper className={classes.container} variant='outlined'>
        <div>
          <div className={classes.subSection}>
            <Typography variant='h6'>Conocimientos</Typography>
            <Tooltip placement='top' title='tooltip'><span><IconButton disabled size='small'><InfoIcon fontSize='small' /></IconButton></span></Tooltip>
          </div>
          <BubbleChart
            candidates={candidates}
            max={4}
            skills={skills}
            skillWidth={200} />
        </div>
      </Paper>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display       : 'flex',
    justifyContent: 'space-between',
    padding       : 12,
    width         : '100%'
  },
  subSection: {
    alignItems: 'center',
    display   : 'flex'
  }
}))
