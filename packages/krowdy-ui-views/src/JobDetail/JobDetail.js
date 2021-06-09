import React from 'react'
import PropTypes from 'prop-types'
import XDate from 'xdate'
import { Typography, Button, Grid, Divider, List, ListItem, ListItemText, Chip, Paper, ListItemAvatar, Avatar } from '@krowdy-ui/core'
import BusinessIcon from '@material-ui/icons/Business'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import keyBy from '../utils/keyBy'
import {
  AccessTimeThin as AccessTimeThinIcon,
  AddCircleOutlinedThin as AddCircleOutlinedThinIcon,
  ComputerThin as ComputerThinIcon,
  DressHookThin as DressHookIcon,
  DriveEtaOutlinedThin as DriveEtaOutlinedThinIcon,
  EmojiPeopleOutlinedThin as EmojiPeopleOutlinedThinIcon,
  LanguageThin as LanguageThinIcon,
  PayrollThin as PayrollThinIcon,
  PetsOutlinedThin as PetsOutlinedThinIcon,
  TrainingThin as TrainingThinIcon
} from '@krowdy-ui/icons'

export const styles = theme => ({
  avatar: {
    backgroundColor: 'transparent',
    color          : theme.palette.secondary[200],
    height         : 26,
    width          : 26
  },
  benefitList: {
    display                     : 'grid',
    gap                         : theme.spacing(1),
    gridTemplateColumns         : '1fr',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr'
    }
  },
  btnPostular: {
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
    backgroundColor: theme.palette.secondary[10] || '#F2F4F7',
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
    backgroundColor: 'white',
    margin         : theme.spacing(0, 5),
    padding        : theme.spacing(1.5)
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
  custom: {
    backgroundColor: 'white',
    bottom         : 0,
    display        : 'none',
    flex           : '1 1 0',
    left           : 0,
    position       : 'fixed',
    right          : 0,
    width          : '100%',
    zIndex         : 1
  },
  defaultBtnPostular: {
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
  descriptionEmpty: {
    '& > img': {
      maxWidth: '100%'
    },
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'column'
  },
  fixedCard: {
    [theme.breakpoints.down('xs')]: {
      '& $custom': {
        display: 'block'
      },
      '& $defaultBtnPostular': {
        display: 'none'
      }
    }
  },
  gridDescription: {
    '@media (min-width: 767px)': {
      marginTop: theme.spacing(7.5)
    },
    marginTop: theme.spacing(3.5)
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
    // color: '#595959'
    color: theme.palette.secondary[200] || '#99A9C2'
  },
  iconDetail: {
    marginRight: theme.spacing(1)
  },
  itemList: {
    '& > div': {
      fontWeight: 'normal',
      wordBreak : 'break-word'
    },
    display   : 'list-item',
    fontSize  : '.8rem',
    fontWeight: 'bold',
    padding   : theme.spacing(.75),
    wordBreak : 'break-word'
  },
  itemOptions: {
    marginRight: theme.spacing(2.5),
    marginTop  : theme.spacing(1)
  },
  list: {
    display      : 'block',
    listStyleType: 'disc',
    margin       : 0,
    paddingLeft  : theme.spacing(5)
  },
  listCompetitions: {
    display   : 'list-item',
    fontSize  : '.8rem',
    fontWeight: 'normal',
    padding   : theme.spacing(.75),
    wordBreak : 'break-word'
  },
  listItem: {
    border      : `1px solid ${theme.palette.secondary[50]}`,
    borderRadius: theme.shape.borderRadius,
    padding     : theme.spacing(1.5)
  },
  listItemAvatar: {
    minWidth: 36
  },
  sectionInformation: {
    margin: theme.spacing(5, 0)
  },
  seeMoreCompany: {
    color     : theme.palette.primary.main,
    cursor    : 'pointer',
    fontSize  : '.8rem',
    marginLeft: theme.spacing(1.25)
  },
  svgIcon: {
    color: theme.palette.secondary[200]
  },
  textDescription: {
    fontSize : '.8rem',
    marginTop: theme.spacing(1.5),
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
      fontSize: 44
    },
    wordBreak: 'break-word'
  },
  titleSection: {
    fontSize: '1.2rem'
  }
})

const Div = ({ children, ...props }) => <div {...props}>{children}</div>

const JobDetail = props => {
  const {
    hiddenButton,
    jobId,
    classes,
    title,
    competencies = [],
    closed,
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
    visibleInformation = false,
    variant,
    fixedCard,
    fixedCardCustomComponent,
    fixedCardCustomStyle = {},
    isPreview
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
  const isFinalized = expirationDate ? new XDate().getTime() >= new XDate(Number(expirationDate)).getTime() : false

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

  const CustomComponent = React.useMemo(() => fixedCardCustomComponent ? fixedCardCustomComponent : 'div', [ fixedCardCustomComponent ])

  const iconByTitle = React.useMemo(()=> (
    keyBy([ {
      icon: (
        <LanguageThinIcon className={classes.svgIcon} />
      ),
      title: 'Trabajo remoto'
    }, {
      icon: (
        <PayrollThinIcon className={classes.svgIcon} />
      ),
      title: 'Planilla'
    }, {
      icon: (
        <AddCircleOutlinedThinIcon className={classes.svgIcon} />
      ),
      title: 'Seguro de Salud'
    }, {
      icon: (
        <AccessTimeThinIcon className={classes.svgIcon} />
      ),
      title: 'Horario flexible'
    }, {
      icon: (
        <ComputerThinIcon className={classes.svgIcon} />
      ),
      title: 'Computadora'
    }, {
      icon: (
        <TrainingThinIcon className={classes.svgIcon} />
      ),
      title: 'Capacitaciones'
    }, {
      icon: (
        <DressHookIcon className={classes.svgIcon} />
      ),
      title: 'Vestimenta informal'
    }, {
      icon: (
        <DriveEtaOutlinedThinIcon className={classes.svgIcon} />
      ),
      title: 'Estacionamiento'
    }, {
      icon: (
        <EmojiPeopleOutlinedThinIcon className={classes.svgIcon} />
      ),
      title: 'Actividades recreativas'
    }, {
      icon: (
        <PetsOutlinedThinIcon className={classes.svgIcon} />
      ),
      title: 'Empresa pet friendly'
    } ], 'title')
  ), [ classes.svgIcon ])

  const ContainerRoot = React.useMemo(() =>
    isPreview ? Div : Paper,
  [ isPreview ])

  const basicEditionFiltered = React.useMemo(() => basicEdition
    .filter(({ visible, description }) => visible && description)
  , [ basicEdition ])

  return (
    <ContainerRoot className={classes.contentJobDetail} variant={variant}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.headerJob}>
            <div className={classes.headerLeft}>
              <Typography className={classes.titleJob} variant='h1'>{title}</Typography>
            </div>
            {!isPreview ? (
              <div className={clsx({
                [classes.fixedCard]: fixedCard
              })}>
                <div className={classes.defaultBtnPostular}>
                  {
                    (!hiddenButton) && (
                      <Button
                        color='primary'
                        disabled={isFinalized || closed}
                        onClick={onClickPostulation}
                        size='large'
                        variant='contained'>
                        {(closed || isFinalized)? 'Finalizado': userInJob ? 'Ver postulación' : 'Postular'}
                      </Button>
                    )
                  }
                  {
                    (timeToDown > 0 && timeToDown <= 14) ?
                      <Typography className={classes.textEndJob} component='span'>
                      Finaliza {timeToDown === 0 ? 'Hoy' : `en ${timeToDown} día${timeToDown === 1 ? '' : 's'}`}.
                      </Typography> :
                      (timeToDown === 0 && !isFinalized) ?
                        <Typography className={classes.textEndJob} variant='subtitle2'>
                              Finaliza hoy
                        </Typography> :
                        null
                  }
                </div>
                <CustomComponent className={classes.custom} style={fixedCardCustomStyle}>
                  {fixedCard}
                </CustomComponent>
              </div>
            ): null}
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
                {(onViewCompany && !isPreview) ? <Typography className={classes.seeMoreCompany} onClick={onViewCompany}>Ver más</Typography>: null}
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
      <Grid className={classes.gridDescription} item xs={12}>
        {
          basicEditionFiltered.length > 0 ?
            basicEditionFiltered
              .map((item, key) => (
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
              )): (
              <div className={classes.descriptionEmpty}>
                <img
                  alt='without-description'
                  src='//s3.amazonaws.com/cdn.krowdy.com/media/images/empty-job.png' />
                <Typography align='center' color='info' variant='body3'>
                  Sin descripción
                </Typography>
              </div>)
        }
      </Grid>
      {
        competencies.length ? (
          <>
            <Divider />
            <section className={classes.sectionInformation}>
              <Typography className={classes.titleSection} variant='h5'>Competencias</Typography>
              <List className={classes.list}>
                {
                  competencies.map((competency, index) => (
                    <ListItem className={classes.listCompetitions} key={`competency-${index}`}>
                      {competency.title}
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
              <List className={classes.benefitList}>
                {
                  benefits.map(({ title }, index) => (
                    <ListItem className={classes.listItem} key={`benefit-${index}`}>
                      <ListItemAvatar className={classes.listItemAvatar}>
                        <Avatar className={classes.avatar}>
                          {iconByTitle[title] ? iconByTitle[title].icon : null}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={title} primaryTypographyProps={{ variant: 'body2' }} />
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
    </ContainerRoot>
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
  closed      : PropTypes.bool,
  company     : PropTypes.object,
  competencies: PropTypes.array,
  description : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  // _id
  detailJob               : PropTypes.array,
  disabledPerson          : PropTypes.object,
  expirationDate          : PropTypes.string,
  fixedCard               : PropTypes.node,
  fixedCardCustomComponent: PropTypes.node,
  fixedCardCustomStyle    : PropTypes.object,
  hiddenButton            : PropTypes.bool,
  isPreview               : PropTypes.bool,
  jobId                   : PropTypes.string,

  onClickPostulation: PropTypes.func,
  // status: PropTypes.string
  onViewCompany     : PropTypes.func,
  requirements      : PropTypes.array,
  title             : PropTypes.string,
  userInJob         : PropTypes.bool,
  variant           : PropTypes.string,
  visibleInformation: PropTypes.bool
}

JobDetail.muiName = 'JobDetail'

export default withStyles(styles, { name: 'KrowdyJobDetail' })(JobDetail)
