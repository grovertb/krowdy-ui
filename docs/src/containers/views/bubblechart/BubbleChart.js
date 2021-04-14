import React from 'react'
import { BubbleChart } from '@krowdy-ui/views'
import { IconButton, makeStyles, Paper, Tooltip, Typography } from '@krowdy-ui/core'
import {
  Info as InfoIcon
} from '@material-ui/icons'

const skills = [
  {
    id  : 1,
    name: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'
  }, {
    id  : 2,
    name: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ... asi de facil le gane al de arriba'
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
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for',
        scaleOrder: 2,
        value     : 'Principiante'
      }, {
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ... asi de facil le gane al de arriba',
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
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for',
        scaleOrder: 1,
        value     : 'Principiante'
      }, {
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ... asi de facil le gane al de arriba',
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
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for',
        scaleOrder: 1,
        value     : 'Principiante'
      }, {
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ... asi de facil le gane al de arriba',
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
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for',
        scaleOrder: 1,
        value     : 'Principiante'
      }, {
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ... asi de facil le gane al de arriba',
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
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for',
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
  },
  {
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    selected       : false,
    skillsCandidate: [
      {
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for',
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
  },
  {
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    selected       : false,
    skillsCandidate: [
      {
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for',
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
  },
  {
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    selected       : false,
    skillsCandidate: [
      {
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for',
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
  },
  {
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    selected       : false,
    skillsCandidate: [
      {
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for',
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
  },
  {
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    selected       : false,
    skillsCandidate: [
      {
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for',
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
  },
  {
    firstName: 'Luis Alfredo',
    lastName : 'Sullca Huaracca',
    photo    :
      'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png',
    selected       : false,
    skillsCandidate: [
      {
        name      : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for',
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
    <div>
      <Paper className={classes.container} variant='outlined'>
        <div style={{
          width: '100%'
        }}>
          <div className={classes.subSection}>
            <Typography variant='h6'>Conocimientos</Typography>
            <Tooltip placement='top' title='tooltip'><span><IconButton disabled size='small'><InfoIcon fontSize='small' /></IconButton></span></Tooltip>
          </div>
          <BubbleChart candidates={candidates} max={4} skills={skills} />
        </div>
      </Paper>
      <Paper className={classes.container} variant='outlined'>
        <div style={{
          width: '100%'
        }}>
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
      <Paper className={classes.container} variant='outlined'>
        <div style={{
          width: '100%'
        }}>
          <div className={classes.subSection}>
            <Typography variant='h6'>Conocimientos</Typography>
            <Tooltip placement='top' title='tooltip'><span><IconButton disabled size='small'><InfoIcon fontSize='small' /></IconButton></span></Tooltip>
          </div>
          <BubbleChart
            candidates={candidates}
            max={4}
            skills={skills}
            skillWidth={400} />
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
    display   : 'flex',
    width     : '100%'
  }
}))
