import React from 'react'
import PropTypes from 'prop-types'
import { Paper, makeStyles, Typography, Divider, Dot, Avatar, Button } from '@krowdy-ui/core'
import {
  Grade as GradeIcon,
  TrendingUp as TrendingUpIcon,
  Work as WorkIcon,
  Business as BusinessIcon,
  Loop as LoopIcon,
  AttachMoney as AttachMoneyIcon,
  School as SchoolIcon
} from '@material-ui/icons'
import clsx from 'clsx'
import dayjs from 'dayjs'

import 'dayjs/locale/es'

const legendDegree = {
  Doctorado    : 4,
  Master       : 3,
  Secundaria   : 0,
  Técnico      : 1,
  Universitario: 2
}

const getEducation = (educations) => {
  if(!educations.length)
    return null

  const parsedEducation = educations.map(education => ({ ...education, degree: legendDegree[education.degree] })).sort((a, b) => {
    if(a.degree > b.degree)
      return -1

    return 1
  })

  return parsedEducation[0]
}

const compare = (a, b) => {
  if(b.workHere || dayjs(a.endDate).isBefore(b.endDate))
    return 1

  return -1
}

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

const Education = ({ education }) => {
  const classes = useStyles()

  const interval = education.endDate ? dayjs().month() - dayjs(education.endDate).month() : null

  return (
    <>
      <div className={classes.row}>
        <div className={classes.icon}>
          <SchoolIcon color='primary' fontSize='small' />
        </div>
        <div>
          <Typography className={classes.title} variant='body1'>{education.career} | {education.institutionName}</Typography>
          <Typography className={classes.subtitle} variant='body1'>{interval ? `Hace ${sufix(interval)}` : ''}</Typography>
        </div>
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

const Company = ({ company }) => {
  const { imgUrl, companyName, workHere, startDate, endDate } = company
  const classes = useStyles()

  const interval = endDate ? dayjs(endDate).month() : dayjs().month() - dayjs(startDate).month()

  return (
    <>
      <div className={clsx(classes.experience, {
        [classes.left]: workHere
      })}>
        {workHere ? (
          <Dot color='primary' />
        ) : null}
        <div className={classes.row}>
          <Avatar
            className={classes.small}
            src={imgUrl}
            variant='rounded'>
            {companyName ? companyName.charAt(0) : <BusinessIcon color='primary' fontSize='small' />}
          </Avatar>
          <div>
            <Typography className={classes.title} variant='body1'>{companyName}</Typography>
            <Typography className={classes.subtitle} variant='body1'>
              {sufix(interval)} • {dayjs(startDate).format('MMM YYYY')} - {endDate ? dayjs(endDate).format('MMM YYYY') : 'Actualidad'}
            </Typography>
          </div>
        </div>
      </div>
      <Divider className={classes.divider} />
    </>
  )
}

const Profile = ({ name, rating, ascent, experience, workExperience, rotation, salaryText, action, experiences = [], educations = [], onCV, slice = 2 }) => {
  const classes = useStyles()

  const parsedExperiences = experiences.filter(({ jobPosition, startDate }) => jobPosition && startDate).sort(compare)

  const difference = experiences.length - slice

  const education = getEducation(educations)

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
        education ? <Education education={education} /> : null
      }
      {
        ascent ? <Ascent count={ascent.count} time={ascent.time} />: null
      }
      {
        rotation ? <Rotation count={rotation.count} time={rotation.time} /> : null
      }
      {
        experience ? <Experience experience={experience} /> : null
      }
      {
        workExperience ? <WorkExperience count={workExperience.count} name={workExperience.name} /> : null
      }
      {
        salaryText ? <SalaryText salaryText={salaryText} /> : null
      }
      {
        parsedExperiences ? (difference > 0 ? parsedExperiences.slice(0, slice) : parsedExperiences).map((company, index) => <Company company={company} key={index} />) :
          null
      }
      {
        difference > 0 ? (
          <div className={classes.difference}>
            <Button color='inherit' onClick={onCV}>
              + {difference} experiencia{difference > 1 ? 's' : ''}
            </Button>
          </div>
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
  contentTitle: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'space-between',
    width         : '100%'
  },
  difference: {
    color        : theme.palette.grey[600],
    display      : 'flex',
    flexDirection: 'row-reverse'
  },
  divider: {
    backgroundColor: theme.palette.secondary[10],
    marginLeft     : -theme.spacing(1),
    marginRight    : -theme.spacing(1)
  },
  experience: {
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'row'
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
  left: {
    marginLeft: theme.spacing(1.5)
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
  small: {
    height     : theme.spacing(3),
    marginLeft : theme.spacing(1),
    marginRight: theme.spacing(1),
    width      : theme.spacing(3)
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
