import React from 'react'
import PropTypes from 'prop-types'
import { Button, IconButton, Typography } from '@krowdy-ui/core'
import { Skeleton } from '@material-ui/lab'
import { AvatarUser } from '@krowdy-ui/views'
import { withStyles } from '@krowdy-ui/styles'
import { Assignment as AssignmentIcon, Public as PublicIcon, LinkedIn as LinkedInIcon, Delete as DeleteIcon } from '@material-ui/icons'
import CardExperiencie from './CardExperiencie'
import CardEducation from './CardEducation'
import CardEspecialization from './CardEspecialization'
import CardKnowledge from './CardKnowledge'

const Profile = ({ classes, candidate, onClickDeleteCandidate, onClickPreviewCV, disableSubHeaderTitle, basic, status }) => (
  <>
    <div className={classes.drawerSubHeaderContent}>
      { !disableSubHeaderTitle ? (
        <>
          <div className={classes.drawerSubHeaderTitle}>
            <Typography variant='h6'>
              {
                candidate ? candidate.nameTask : <Skeleton width={50} />
              }
            </Typography>
            <Typography variant='info2'>
              {
                candidate ? status : <Skeleton width={68} />
              }
            </Typography>
          </div>
          <div>
            {onClickDeleteCandidate ? (
              <IconButton color='primary' onClick={onClickDeleteCandidate} size='small'>
                <DeleteIcon fontSize='small' />
              </IconButton>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
    <div className={classes.userHeader}>
      <div className={classes.userHeaderTitles}>
        <Typography className={classes.userName} variant='h4'>
          {candidate ? `${candidate.firstName} ${candidate.lastName}` : <Skeleton animation='wave' variant='text' width={200} />}
        </Typography>
        <Typography>
          {
            basic ? null : candidate ?
              `${candidate.email || ''} ${candidate.email && candidate.phone ? '•' : ''} ${candidate.phone || ''}` :
              <Skeleton animation='wave' variant='text' width={200} />
          }
        </Typography>
      </div>
      <div className={classes.userAvatarContent}>
        {
          candidate ? (
            <AvatarUser
              classes={{ defaultAvatar: classes.userDefaultAvatar, imageDefault: classes.userDefaultAvatar }}
              user={{
                firstName: candidate.firstName,
                lastName : candidate.lastName,
                photo    : candidate.photo
              }} />
          ) : (
            <Skeleton
              animation='wave'
              height={64}
              variant='circle'
              width={64} />
          )
        }
      </div>
    </div>
    <div className={classes.actionsContent}>
      {!basic ? (
        <>
          {onClickPreviewCV ? (
            <Button
              color='primary' disabled={!(candidate && candidate.curriculum)} onClick={onClickPreviewCV}
              startIcon={<AssignmentIcon />}>
          Ver CV
            </Button>
          ) : null}
          <div>
            <IconButton
              color='primary'
              component='a'
              disabled={!(candidate && candidate.linkedin)}
              href={candidate && candidate.linkedin ? candidate.linkedin : '#'}
              size='small'
              target='_blank'>
              <LinkedInIcon fontSize='small' />
            </IconButton>
            <IconButton
              color='primary'
              component='a'
              disabled={!(candidate && candidate.website)}
              href={candidate && candidate.website ? candidate.website : '#'}
              size='small'
              target='_blank'>
              <PublicIcon fontSize='small' />
            </IconButton>
          </div>
        </>
      ) : null}
    </div>
    <div className={classes.userContent}>
      {
        candidate ? (
          <>
            {
              candidate.experience && candidate.experience.length ? (
                <>
                  <Typography align='center' color='secondary' variant='h4'>Experiencia</Typography>
                  {
                    candidate.experience.map((
                      { area, description, companyName, hierarchy, jobPosition, endDate, location, startDate, workHere },
                      index
                    ) => (
                      <CardExperiencie
                        area={area}
                        companyName={companyName}
                        description={description}
                        endDate={endDate}
                        hierarchy={hierarchy}
                        jobPosition={jobPosition}
                        key={`experiencie-${index}`}
                        location={location}
                        startDate={startDate}
                        workHere={workHere} />
                    ))
                  }
                </>
              ) : null
            }
            {
              candidate.education && candidate.education.length ? (
                <>
                  <Typography align='center' color='secondary' variant='h4'>Educación</Typography>
                  {
                    candidate.education.map((
                      { condition = '', description = '', institutionName, career, endDate, degree, startDate, studyingHere },
                      index
                    ) => (
                      <CardEducation
                        career={career}
                        condition={condition}
                        degree={degree}
                        description={description}
                        endDate={endDate}
                        institutionName={institutionName}
                        key={`education-${index}`}
                        startDate={startDate}
                        studyingHere={studyingHere} />
                    ))
                  }
                </>
              ) : null
            }
            {
              candidate.especialization && candidate.especialization.length ? (
                <>
                  <Typography align='center' color='secondary' variant='h4'>Especialización</Typography>
                  {
                    candidate.especialization.map((
                      { especializationName, especializationPlace, endDate, startDate, studyingHere, description },
                      index
                    ) => (
                      <CardEspecialization
                        description={description}
                        endDate={endDate}
                        especializationName={especializationName}
                        especializationPlace={especializationPlace}
                        key={`especialization-${index}`}
                        startDate={startDate}
                        studyingHere={studyingHere} />
                    ))
                  }
                </>
              ) : null
            }
            {
              candidate.knowledge && candidate.knowledge.length ? (
                <>
                  <Typography align='center' color='secondary' variant='h4'>Conocimientos</Typography>
                  {
                    candidate.knowledge.map((
                      { knowledgeName, level },
                      index
                    ) => (
                      <CardKnowledge
                        key={`knowledge-${index}`}
                        knowledgeName={knowledgeName}
                        level={level} />
                    ))
                  }
                </>
              ) : null
            }
          </>
        ) : null
      }
    </div>
  </>
)

Profile.propTypes = {
  basic    : PropTypes.bool,
  candidate: PropTypes.object,
  classes  : PropTypes.shape({
    actionsContent        : PropTypes.string,
    drawerHeaderContent   : PropTypes.string,
    drawerSubHeaderContent: PropTypes.string,
    drawerSubHeaderTitle  : PropTypes.string,
    leaveContent          : PropTypes.string,
    leaveContentTitle     : PropTypes.string,
    userAvatarContent     : PropTypes.string,
    userContent           : PropTypes.string,
    userDefaultAvatar     : PropTypes.string,
    userHeader            : PropTypes.string,
    userHeaderTitles      : PropTypes.string,
    userName              : PropTypes.string
  }),
  disableSubHeaderTitle : PropTypes.bool,
  onClickDeleteCandidate: PropTypes.func,
  onClickPreviewCV      : PropTypes.func,
  status                : PropTypes.string
}

const styles = ({ palette, spacing, shadows }) => ({
  actionsContent: {
    display       : 'flex',
    justifyContent: 'space-between',
    padding       : spacing(1.5)
  },
  drawerHeaderContent: {
    alignItems     : 'center',
    backgroundColor: palette.secondary[10],
    boxShadow      : shadows[1], // `inset 0px -1px 0px ${palette.getContrastText('#E8E8E8')}`,
    display        : 'flex',
    justifyContent : 'space-between',
    padding        : spacing(0.5, 1.5)
  },
  drawerSubHeaderContent: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'space-between',
    padding       : spacing(0.5, 1.5)
  },
  drawerSubHeaderTitle: {
    '& > p': {
      marginLeft: spacing(1.5)
    },
    display: 'flex'
  },
  leaveContent: {
    maxWidth: 330,
    padding : spacing(2.5)
  },
  leaveContentTitle: {
    alignItems  : 'center',
    display     : 'flex',
    marginBottom: spacing(1)
  },
  userAvatarContent: {
    bottom   : 0,
    display  : 'flex',
    left     : '50%',
    position : 'absolute',
    transform: 'translate(-50%, 50%)'
  },
  userContent: {
    overflow: 'auto',
    padding : spacing(0, 1.5, 1.5, 1.5)
  },
  userDefaultAvatar: {
    borderColor: 'white',
    color      : palette.grey[600],
    height     : 64,
    width      : 64
  },
  userHeader: {
    backgroundColor: palette.secondary[600],
    display        : 'flex',
    height         : 110,
    justifyContent : 'center',
    position       : 'relative'
  },
  userHeaderTitles: {
    color    : 'white',
    textAlign: 'center'
  },
  userName: {
    marginTop: 20
  }
})

export default withStyles(styles, { name: 'ProfileCandidate' })(Profile)
