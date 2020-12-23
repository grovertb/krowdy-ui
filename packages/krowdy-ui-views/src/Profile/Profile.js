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

function sufix(number) {
  if(number >= 12) {
    const year = Math.floor(number / 12)

    return `${year} ${year > 1 ? 'años' : 'año'}`
  }

  return `${number} ${number > 1 ? 'meses' : 'mes'}`
}

const Rating = ({ rating }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.first}>
        <Typography variant='h6'>{rating}</Typography>
        <GradeIcon className={classes.rating} color='primary' fontSize='small' />
      </div>
      <Divider className={classes.divider} />
    </>
  )
}

const Ascent = ({ count, time }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.row}>
        <div className={classes.icon}>
          <TrendingUpIcon color='primary' fontSize='small' />
        </div>
        <div>
          <Typography className={classes.title} variant='body1'>{count} Ascenso{count > 1 ? 's' : ''}</Typography>
          <Typography className={classes.subtitle} variant='body1'>En {sufix(time)}</Typography>
        </div>
      </div>
      <Divider className={classes.divider} />
    </>
  )
}

const Experience = ({ experience }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.row}>
        <div className={classes.icon}>
          <WorkIcon color='primary' fontSize='small' />
        </div>
        <div>
          <Typography className={classes.title} variant='body1'>Experiencia</Typography>
          <Typography className={classes.subtitle} variant='body1'>{sufix(experience)}</Typography>
        </div>
      </div>
      <Divider className={classes.divider} />
    </>
  )
}

const WorkExperience = ({ name, count }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.row}>
        <div className={classes.icon}>
          <BusinessIcon color='primary' fontSize='small' />
        </div>
        <div>
          <Typography className={classes.title} variant='body1'>Trabaja en {name}</Typography>
          <Typography className={classes.subtitle} variant='body1'>Hace {sufix(count)}</Typography>
        </div>
      </div>
      <Divider className={classes.divider} />
    </>
  )
}

const Rotation = ({ count, time }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.row}>
        <div className={classes.icon}>
          <LoopIcon color='primary' fontSize='small' />
        </div>
        <div>
          <Typography className={classes.title} variant='body1'>Rotación</Typography>
          <Typography className={classes.subtitle} variant='body1'>{count} ve{count > 1 ? 'ces' : 'z'} cada {sufix(time)}</Typography>
        </div>
      </div>
      <Divider className={classes.divider} />
    </>
  )
}

const SalaryText = ({ salaryText }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.row}>
        <div className={classes.icon}>
          <AttachMoneyIcon color='primary' fontSize='small' />
        </div>
        <div>
          <Typography className={classes.title} variant='body1'>Salario</Typography>
          <Typography className={classes.subtitle} variant='body1'>{salaryText}</Typography>
        </div>
      </div>
      <Divider className={classes.divider} />
    </>
  )
}

const Profile = ({ name, rating, ascent, experience, workExperience, rotation, salaryText, action }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.container} variant='outlined'>
      <div className={classes.contentTitle}>
        <Typography className={classes.name} variant='h6'>{name}</Typography>
        {action}
      </div>
      {
        rating ? <Rating rating={rating} /> : null
      }
      {
        ascent ? <Ascent count={ascent.count} time={ascent.time} />: null
      }
      {
        experience ? <Experience experience={experience} /> : null
      }
      {
        workExperience ? <WorkExperience count={workExperience.count} name={workExperience.name} /> : null
      }
      {
        rotation ? <Rotation count={rotation.count} time={rotation.time} /> : null
      }
      {
        salaryText ? <SalaryText salaryText={salaryText} /> : null
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
  contentTitle: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'space-between',
    width         : '100%'
  },
  divider: {
    backgroundColor: theme.palette.secondary[10],
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
  action: PropTypes.node,
  ascent: PropTypes.shape({
    count: PropTypes.number,
    time : PropTypes.number
  }),
  experience: PropTypes.number,
  name      : PropTypes.string.isRequired,
  rating    : PropTypes.number,
  rotation  : PropTypes.shape({
    count: PropTypes.number,
    time : PropTypes.number
  }),
  salaryText    : PropTypes.string,
  workExperience: PropTypes.shape({
    count: PropTypes.number,
    name : PropTypes.string
  })
}

export default Profile
