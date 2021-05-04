import React from 'react'
import PropTypes from 'prop-types'
import XDate from 'xdate'
import { Typography, Button, Grid, Divider, List, ListItem, ListItemText, Chip } from '@krowdy-ui/core'
import BusinessIcon from '@material-ui/icons/Business'
import { withStyles } from '@krowdy-ui/styles'

export const styles = theme => ({
  btnPostular: {
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'white',
      bottom         : 0,
      flex           : '1 1 0',
      left           : 0,
      padding        : theme.spacing(2),
      position       : 'fixed',
      right          : 0,
      width          : '100%',
      zIndex         : 1
    },
    '& button': {
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      }
    },
    alignItems   : 'flex-end',
    display      : 'flex',
    flex         : '1 0 1',
    flexDirection: 'column'
  },
  chips: {
    '&:nth-last-child(1)': {
      marginRight: 0
    },
    margin  : '5px 5px 5px 0',
    maxWidth: '100%'
  },
  contentCompany: {
    '& > a': {
      marginLeft: theme.spacing(1)
    },
    alignItems                    : 'flex-end',
    display                       : 'flex',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center'
    }
  },
  contentCompanyLogo: {
    '& > img': {
      display: 'block',
      width  : '100%'
    },
    alignItems     : 'center',
    backgroundColor: '#EFEFEF',
    border         : '1px solid rgb(234, 234, 234)',
    borderRadius   : 6,
    display        : 'flex',
    height         : 47,
    justifyContent : 'center',
    width          : 47
  },
  contentJobDetail: {
    '& > *': {
      margin: theme.spacing(2, 0)
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft   : theme.spacing(2),
      marginRight  : theme.spacing(2),
      paddingBottom: theme.spacing(5)
    },
    margin: theme.spacing(0, 5)
  },
  contentOptions: {
    '& > div': {
      alignItems: 'center',
      color     : theme.palette.primary.main,
      display   : 'flex'
    },
    display : 'flex',
    flexWrap: 'wrap'
  },
  contentTitle: {
    display: 'flex'
  },
  descriptionEmpty: {
    '& > img': {
      maxWidth: '100%'
    },
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'column'
  },
  headerJob: {
    display                     : 'flex',
    flexDirection               : 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  headerLeft: {
    flex: '1'
  },
  iconCompany: {
    color: '#595959'
  },
  iconDetail: {
    marginRight: 8
  },
  itemList: {
    '& > div': {
      fontWeight: 'normal',
      wordBreak : 'break-word'
    },
    display   : 'list-item',
    fontSize  : '.8rem',
    fontWeight: 'bold',
    padding   : 6,
    wordBreak : 'break-word'
  },
  itemOptions: {
    marginRight: 20,
    marginTop  : 8
  },
  list: {
    display      : 'block',
    listStyleType: 'disc',
    margin       : 0,
    paddingLeft  : 40
  },
  listCompetitions: {
    display   : 'list-item',
    fontSize  : '.8rem',
    fontWeight: 'normal',
    padding   : 6,
    wordBreak : 'break-word'
  },
  sectionInformation: {
    margin: theme.spacing(5, 0)
  },
  seeMoreCompany: {
    color     : theme.palette.primary.main,
    cursor    : 'pointer',
    fontSize  : '.8rem',
    marginLeft: 10
  },
  textDescription: {
    fontSize : '.8rem',
    marginTop: theme.spacing(4),
    wordBreak: 'break-word'
  },
  textDetail: {
    fontSize: '.8rem'
  },
  textEndJob: {
    fontSize    : 12,
    marginTop   : theme.spacing(.5),
    paddingRight: theme.spacing(.5)
  },
  titleCompany: {
    '&.no-visible': {
      fontSize: '1rem'
    },
    fontSize  : '1.4rem',
    fontWeight: 'bold',
    lineHeight: 1,
    marginLeft: theme.spacing(1)
  },
  titleJob: {
    '&:first-letter': {
      textTransform: 'uppercase'
    },
    fontSize                      : '2.5rem',
    textTransform                 : 'lowercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.75rem'
    },
    wordBreak: 'break-word'
  },
  titleSection: {
    fontSize: '1.2rem'
  }
})

const JobDetail = props => {
  const {
    hiddenButton,
    jobId,
    classes,
    title,
    competencies = [],
    description,
    basicEdition = [],
    benefits = [],
    userInJob = false,
    company = {},
    detailJob = [],
    expirationDate,
    disabledPerson: {
      visible: visibleDisabled,
      accepted: acceptedDisabled
    } = {},
    requirements = [],
    onClickPostulation = () => {},
    onViewCompany,
    visibleInformation = false
  } = props

  const [ imageFailed, setImageFailed ] = React.useState(false)

  React.useEffect(() => {
    setImageFailed(false)
  }, [ jobId ])

  const expDate = new XDate(expirationDate) // DEVUELVE 2019-12-29 10:38:20
  const expDateFormat = new XDate(expDate.getFullYear(), expDate.getMonth(), expDate.getDate()) // DEVUELVE 2019-12-29
  const today = new XDate() // DEVUELVE 2019-12-30 10:38:20
  const todayFormat = new XDate(today.getFullYear(), today.getMonth(), today.getDate()) // DEVUELVE 2019-12-30
  const timeToDown = todayFormat.diffDays(expDateFormat)

  const renderItemRequirement = requirement => {
    switch (requirement.title.toLowerCase()) {
      case 'carreras':
        return requirement.value.map((career, indexCareer) => (
          <Chip
            // className={classes.requirementsChip}
            className={classes.chips}
            color='primary'
            key={`career-${indexCareer}`}
            label={career}
            size='small'
            variant='outlined' />)
        )
      case 'idioma':
        return requirement.value.map((idioma, indexIdioma) => (
          <Typography
            // className={classes.requirementsSubtitle}
            // component='span'
            key={`idioma-${indexIdioma}`}>
            {idioma}
          </Typography>
        ))
      default:
        return requirement.value
    }
  }

  const handleErrorImage = () => {
    setImageFailed(true)
  }

  return (
    <div className={classes.contentJobDetail}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.headerJob}>
            <div className={classes.headerLeft}>
              <Typography className={classes.titleJob} variant='h1'>{title}</Typography>
            </div>
            <div className={classes.btnPostular}>
              {
                !hiddenButton && <Button
                  color='primary' disabled={timeToDown < 0} onClick={onClickPostulation}
                  size='large' variant='contained'>{userInJob ? 'Ver postulación' : 'Postular'}</Button>
              }
              {
                (timeToDown >= 0 && timeToDown <= 14) ?
                  <Typography className={classes.textEndJob} component='span'>
                    Finaliza {timeToDown === 0 ? 'Hoy' : `en ${timeToDown} día${timeToDown === 1 ? '' : 's'}`}.
                  </Typography> : null
              }
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.contentCompany}>
          <div className={classes.contentCompanyLogo}>
            {
              (company.company_logo && visibleInformation && !imageFailed) ?
                <img alt='company logo' onError={handleErrorImage} src={company.company_logo} /> :
                <BusinessIcon className={classes.iconCompany} />
            }
          </div>
          {
            !visibleInformation ? (
              <Typography className={`${classes.titleCompany} no-visible`}>Confidencial</Typography>
            ) : (
              <>
                <Typography className={classes.titleCompany}>{company.company_name}</Typography>
                {onViewCompany ? <Typography className={classes.seeMoreCompany} onClick={onViewCompany}>Ver más</Typography>: null}
              </>
            )
          }
        </div>
      </Grid>

      {
        description ? (
          <Grid item>
            {
              typeof description === 'object' ?
                description :
                <Typography
                  className={classes.textDescription}
                  variant='body3' >
                  {description}
                </Typography>
            }
          </Grid>
        ) : null
      }

      <Grid className={classes.contentOptions} item xs={12}>
        {
          detailJob.map(({ icon, text }, index) => (
            <div className={classes.itemOptions} key={`option-${index}`}>
              <Typography className={classes.iconDetail}>{icon}</Typography>
              <Typography className={classes.textDetail} color='body' variant='h6'>{text}</Typography>
            </div>
          ))
        }
      </Grid>
      {
        basicEdition.filter(({ visible, description }) => visible && description).map((item, key) => (
          <section className={classes.sectionInformation} key={`information-${key}`}>
            <Typography className={classes.titleSection} variant='h4'>{item.title}</Typography>
            {
              item.description ? (
                <Typography
                  className={classes.textDescription}
                  component='div'
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  variant='body2' />
              ) : null
            }

          </section>
        ))
      }
      {
        competencies.length ? (
          <>
            <Divider />
            <section className={classes.sectionInformation}>
              <Typography className={classes.titleSection} variant='h5'>Competencias</Typography>
              <List className={classes.list}>
                {
                  competencies.map((competencie, index) => (
                    <ListItem className={classes.listCompetitions} key={`competencie-${index}`}>
                      {competencie.title}
                    </ListItem>
                  ))
                }
              </List>
            </section>
          </>
        ) : null
      }
      {
        benefits.length ? (
          <>
            <Divider />
            <section className={classes.sectionInformation}>
              <Typography className={classes.titleSection} variant='h5'>Beneficios</Typography>
              <List className={classes.list}>
                {
                  benefits.map(({ title: titleBenefits, description: descriptionBenefits }, index) => (
                    <ListItem className={classes.itemList} key={`benefit-${index}`}>
                      {titleBenefits}
                      <ListItemText
                        secondary={
                          titleBenefits === 'EPS' ?
                            descriptionBenefits ? `${descriptionBenefits}%` :
                              '' :
                            descriptionBenefits
                        } />
                    </ListItem>
                  ))
                }
              </List>
            </section>
          </>
        ) : null
      }
      {
        requirements.length || visibleDisabled ? (
          <>
            <Divider />
            <section className={classes.sectionInformation}>
              <Typography className={classes.titleSection} variant='h5'>Requerimientos</Typography>
              <List className={classes.list}>
                {
                  requirements.map((requirement, index) => (
                    <ListItem className={classes.itemList} key={`requirement-${index}`}>
                      {requirement.title}
                      <div>{renderItemRequirement(requirement)}</div>
                    </ListItem>
                  ))
                }
                {
                  visibleDisabled ? (
                    <ListItem className={classes.itemList}>
                      Apto para discapacitados
                      <div>{acceptedDisabled ? 'Si' : 'No'}</div>
                    </ListItem>
                  ) : null
                }

              </List>
            </section>
          </>
        ) : null
      }
    </div>
  )
}

JobDetail.propTypes = {
  basicEdition: PropTypes.array,
  benefits    : PropTypes.array,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes     : PropTypes.object,
  company     : PropTypes.object,
  competencies: PropTypes.array,
  description : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  // _id
  detailJob         : PropTypes.array,
  disabledPerson    : PropTypes.object,
  expirationDate    : PropTypes.string,
  hiddenButton      : PropTypes.bool,
  jobId             : PropTypes.string,
  onClickPostulation: PropTypes.func,
  // status: PropTypes.string
  onViewCompany     : PropTypes.func,
  requirements      : PropTypes.array,
  title             : PropTypes.string,
  userInJob         : PropTypes.bool,
  visibleInformation: PropTypes.bool
}

JobDetail.muiName = 'JobDetail'

export default withStyles(styles, { name: 'KrowdyJobDetail' })(JobDetail)
