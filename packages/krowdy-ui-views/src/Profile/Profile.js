import React from 'react'
import PropTypes from 'prop-types'
import { Paper, makeStyles, Typography, Divider } from '@krowdy-ui/core'
import {
  Grade as GradeIcon,
  TrendingUp as TrendingUpIcon,
  Work as WorkIcon,
  Business as BusinessIcon,
  Loop as LoopIcon,
  AttachMoney as AttachMoneyIcon
} from '@material-ui/icons'

function sufix(number, first, second) {
  return number > 1 ? first : second
}

function ordinal(number) {
  switch (number) {
    case 1:
    case 3:
      return number + 'er'
    case 2:
      return number + 'do'
    case 4:
    case 5:
    case 6:
      return number + 'to'
    case 7:
    case 10:
      return number + 'mo'
    case 9:
      return number + 'no'
    default:
      return number + 'vo'
  }
}

const Profile = ({ name, rating, ascent, experience, workExperience, rotation, salary }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.container} variant='outlined'>
      <Typography className={classes.name} variant='h6'>{name}</Typography>
      <div className={classes.first}>
        <Typography variant='h6'>{rating}</Typography>
        <GradeIcon className={classes.rating} color='primary' fontSize='small' />
      </div>
      <Divider className={classes.divider} />
      {
        ascent ? (
          <>
            <div className={classes.row}>
              <div className={classes.icon}>
                <TrendingUpIcon color='primary' fontSize='small' />
              </div>
              <div>
                <Typography className={classes.title} variant='body1'>{ascent.count} Ascenso{sufix(ascent.count, 's', '')}</Typography>
                <Typography className={classes.subtitle} variant='body1'>En {ascent.time} año{sufix(ascent.time, 's', '')}</Typography>
              </div>
            </div>
            <Divider className={classes.divider} />
          </>
        ) : null
      }
      {
        experience ? (
          <>
            <div className={classes.row}>
              <div className={classes.icon}>
                <WorkIcon color='primary' fontSize='small' />
              </div>
              <div>
                <Typography className={classes.title} variant='body1'>Experiencia</Typography>
                <Typography className={classes.subtitle} variant='body1'>{experience} año{sufix(experience, 's', '')}</Typography>
              </div>
            </div>
            <Divider className={classes.divider} />
          </>
        ) : null
      }
      {
        workExperience ? (
          <>
            <div className={classes.row}>
              <div className={classes.icon}>
                <BusinessIcon color='primary' fontSize='small' />
              </div>
              <div>
                <Typography className={classes.title} variant='body1'>Trabaja en {workExperience.name}</Typography>
                <Typography className={classes.subtitle} variant='body1'>Hace {workExperience.count} año{sufix(workExperience.count, 's', '')}</Typography>
              </div>
            </div>
            <Divider className={classes.divider} />
          </>
        ) : null
      }
      {
        rotation ? (
          <>
            <div className={classes.row}>
              <div className={classes.icon}>
                <LoopIcon color='primary' fontSize='small' />
              </div>
              <div>
                <Typography className={classes.title} variant='body1'>Rotación</Typography>
                <Typography className={classes.subtitle} variant='body1'>{rotation.count} ve{sufix(rotation.count, 'ces', 'z')} cada {rotation.time} me{sufix(rotation.time, 'ses', 's')}</Typography>
              </div>
            </div>
            <Divider className={classes.divider} />
          </>
        ) : null
      }
      {
        salary ? (
          <>
            <div className={classes.row}>
              <div className={classes.icon}>
                <AttachMoneyIcon color='primary' fontSize='small' />
              </div>
              <div>
                <Typography className={classes.title} variant='body1'>Salario</Typography>
                <Typography className={classes.subtitle} variant='body1'>{ordinal(salary)} más cómodo</Typography>
              </div>
            </div>
            <Divider className={classes.divider} />
          </>
        ) : null
      }
    </Paper>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    display      : 'flex',
    flexDirection: 'column',
    height       : '100%',
    overflow     : 'hidden',
    padding      : theme.spacing(1),
    width        : '100%'
  },
  divider: {
    backgroundColor: theme.palette.secondary[0],
    marginLeft     : -theme.spacing(1),
    marginRight    : -theme.spacing(1)
  },
  first: {
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'row',
    marginBottom : theme.spacing(2),
    marginTop    : theme.spacing(0.5)
  },
  icon: {
    marginLeft : theme.spacing(1),
    marginRight: theme.spacing(2)
  },
  name: {
    color: theme.palette.secondary[600]
  },
  rating: {
    marginLeft: theme.spacing(1)
  },
  row: {
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'row',
    marginBottom : theme.spacing(0.5),
    marginTop    : theme.spacing(0.5)
  },
  subtitle: {
    color: theme.palette.grey[600]
  },
  title: {
    color: theme.palette.grey[800]
  }
}), { name: 'Profile' })

Profile.propTypes = {
  ascent: PropTypes.shape({
    count: PropTypes.number,
    time : PropTypes.number
  }),
  experience: PropTypes.number,
  name      : PropTypes.string.isRequired,
  rating    : PropTypes.number.isRequired,
  rotation  : PropTypes.shape({
    count: PropTypes.number,
    time : PropTypes.number
  }),
  salary        : PropTypes.number,
  workExperience: PropTypes.shape({
    count: PropTypes.number,
    name : PropTypes.string
  })
}

export default Profile
