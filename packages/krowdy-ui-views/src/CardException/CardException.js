import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
// import clsx from 'clsx'
import {
  Card,
  Chip,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@krowdy-ui/core'
import {
  Person as PersonIcon,
  Work as WorkIcon,
  Business as BusinessIcon,
  Group as GroupIcon,
  EmojiPeople as EmojiPeopleIcon
} from '@material-ui/icons'


export const styles = theme => ({
  cardContent: {
    minWidth: 760
  },
  customChip: {
    marginRight: theme.spacing(2)
  },
  gridContent: {
    '& > div': {
      // height: 20,
      width: '100%'
    },
    '& > div:first-child': {
      background: 'pink'
    },
    '& > div:last-child': {
      background: 'orange'
    },
    background: 'gray',
    display: 'grid',
    gridGap: 20,
    gridTemplateColumns: '1fr 1fr'
  },
  list: {
    // background: 'pink',
    display: 'flex',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    listStyle: 'none',
    // maxHeight: 100,
    padding: 0
  },
  listItem: {
    '& > svg': {
      marginRight: theme.spacing(2)
    },
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(1)
  },
  statusPoint: {
    background: 'red',
    borderRadius: '50%',
    display: 'inline-block',
    height: 8,
    marginRight: theme.spacing(1),
    width: 8
  },
  title: {
    margin: theme.spacing(1, 0)
  },
  topBarStatus: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2)
  }
})



function CardException(props) {
  const {
    classes,
    area = {},
    candidate = {},
    company = {},
    dateTime = '',
    group = {},
    recruiter = {},
    krowder = {},
    statusException = '',
    title = '',
    type = null
  } = props

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.cardContent}>
          <div className={classes.topBarStatus}>
            <div className={classes.topBarStatusLeft}>
              <Chip className={classes.customChip} label='Video EnTrevista' color='primary' />
              <span><small className={classes.statusPoint} /> {statusException}</span>
            </div>
            <div className={classes.topBarStatusRight}>
              <Typography color='secondary' variant='h6'>
                {dateTime}
              </Typography>
            </div>
          </div>

          <div className={classes.description}>
            <Typography color='secondary' variant='h6'>Excepciòn {type}</Typography>
            <Typography className={classes.title} variant='h5'>{title}</Typography>
            <div className={classes.gridContent}>
              <div>
                <ul className={classes.list}>
                  {
                    recruiter.hasOwnProperty('name') ?
                      <li className={classes.listItem}>
                        <EmojiPeopleIcon color='primary' /> {recruiter.name}
                      </li> : null
                  }
                  {
                    krowder.hasOwnProperty('name') ?
                      <li className={classes.listItem}>
                        <EmojiPeopleIcon color='primary' /> {krowder.name}
                      </li> : null
                  }
                  {
                    candidate.hasOwnProperty('name') ?
                      <li className={classes.listItem}>
                        <PersonIcon color='primary' /> {candidate.name}
                      </li> : null
                  }
                  {
                    area.hasOwnProperty('name') ?
                      <li className={classes.listItem}>
                        <WorkIcon color='primary' /> {area.name}
                      </li> : null
                  }
                </ul>
              </div>
              <div>
                <ul className={classes.list}>
                  {
                    company.hasOwnProperty('name') ?
                      <li className={classes.listItem}>
                        <BusinessIcon color='primary' /> {company.name}
                      </li> : null
                  }
                  {
                    group.hasOwnProperty('name') ?
                      <li className={classes.listItem}>
                        <GroupIcon color='primary' /> {group.name}
                      </li> : null
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}

CardException.propTypes = {
  classes: PropTypes.object
}

CardException.muiName = 'CardException'

export default withStyles(styles, { name: 'CardException' })(CardException)
