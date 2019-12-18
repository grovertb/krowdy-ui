import React from 'react'
import PropTypes from 'prop-types' 
import { Typography, Button, Grid, Divider, List, ListItem, ListItemText, Chip } from '@krowdy-ui/core'
import { withStyles } from '@krowdy-ui/core/styles'

export const styles = theme => ({
  contentTitle: {
    display: 'flex'
  },
  contentJobDetail: {
    '& > *': {
      margin: theme.spacing(2, 0)
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(5)
    },
    margin: theme.spacing(0, 3)
  },
  contentOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > div' :{
      color: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center'
    }
  },
  itemOptions: {
    '& > svg': {
      marginRight: 8
    },
    marginTop: 8,
    marginRight: 20
  },
  descriptionEmpty: {
    '& > img': {
      maxWidth: '100%'
    },
    alignItems    : 'center',
    display       : 'flex',
    flexDirection : 'column'
  },
  sectionInformation: {
    margin: theme.spacing(5, 0)
  },
  list: {
    display: 'block',
    listStyleType: 'disc',
    margin: 0,
    paddingLeft: 40
  },
  itemList: {
    display  : 'list-item',
    padding  : 6
  },
  btnPostular: {
    [theme.breakpoints.down('xs')]: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      backgroundColor: 'white',
      width: '100%',
      padding: theme.spacing(2)
    }
  }
})

const JobDetail = props => {
  const {
    classes,
    title,
    competencies = [],
    description,
    basicEdition = [],
    benefits = [],
    // company = {},
    detailJob = [],
    // expirationDate,
    requirements = [],
    onClickPostulation= () => {},
    // visibleInformation
  } = props

  const renderItemRequirement = requirement => {
    switch (requirement.title.toLowerCase()) {
      case 'carreras':
        return requirement.value.map((career, indexCareer) => (
          <Chip
            // className={classes.requirementsChip}
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

  return (
    <div className={classes.contentJobDetail}>
      <Grid container>
        <Grid item sm={10} xs={12}>
          <Typography variant='h1'>{title}</Typography>
        </Grid>
        <Grid item sm={2} xs={12} className={classes.btnPostular}>
          <Button onClick={onClickPostulation} fullWidth size='large' variant='contained' color='primary'>Postular</Button>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant='body3'>{description}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.contentOptions}>
        {
          detailJob.map(({icon, text}, index) => (
            <div key={`option-${index}`} className={classes.itemOptions}>
                {
                  icon
                }
              <Typography color='body' variant='h6'>
                {
                  text
                }
              </Typography>
            </div>
          ))
        }
      </Grid>
      {
        basicEdition.filter(({ visible }) => visible).map((item, key) => (
          <section key={`information-${key}`} className={classes.sectionInformation}>
            <Typography variant='h4'>{item.title}</Typography>
            {
              item.description ? (
                <Typography
                component='div'
                dangerouslySetInnerHTML={{ __html: item.description }}
                variant='body2' />
              ) : (
                <div className={classes.descriptionEmpty}>
                  <img
                    alt='without-description'
                    src='https://s3.amazonaws.com/cdn.krowdy.com/media/images/empty-job.png' />
                  <Typography color='info' variant='body3' align='center'>
                    Sin descripción
                  </Typography>
                </div>
              )
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
                    <ListItem className={classes.itemList} key={`competencie-${index}`}>
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
                  benefits.map((benefit, index) => (
                    <ListItem className={classes.itemList} key={`benefit-${index}`}>
                      {benefit.title}
                      <ListItemText 
                        secondary={benefit.description} />
                    </ListItem>
                  ))
                }
              </List>
            </section> 
          </>
        ) : null
      }
      {
        requirements.length ? (
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
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  benefits: PropTypes.array,
  classes: PropTypes.object,
  // company: PropTypes.object,
  competencies: PropTypes.array,
  // _id
  description: PropTypes.string,
  detailJob: PropTypes.array,
  // status: PropTypes.string
  // expirationDate: PropTypes.string,
  onClickPostulation: PropTypes.func,
  requirements: PropTypes.array,
  title: PropTypes.string,
  // visibleInformation: PropTypes.bool
}

JobDetail.muiName = 'JobDetail';

export default withStyles(styles, { name: 'KrowdyJobDetail' })(JobDetail)