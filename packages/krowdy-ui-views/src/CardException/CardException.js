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
  list: {
    // background: 'pink',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    listStyle: 'none',
    maxHeight: 100,
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
  topBarStatus: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2)
  }
  // defaultAvatar: {
  //   alignItems: 'center',
  //   border: `solid 2px ${theme.palette.primary.main}`,
  //   borderRadius: '50%',
  //   display: 'flex',
  //   fontSize: 14,
  //   height: 48,
  //   justifyContent: 'center',
  //   // marginRight: theme.spacing(2),
  //   width: 48
  // },
  // defaultAvatarNothing: {
  //   background: theme.palette.grey[400]
  // },
  // image:{
  //   border: `solid 2px ${theme.palette.primary.main}`,
  //   borderRadius: '50%',
  //   height: 48,
  //   // marginRight: theme.spacing(2),
  //   width: 48
  // },
})

function CardException (props) {
  const {
    classes
  } = props
  
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.cardContent}>
          <div className={classes.topBarStatus}>
            <div className={classes.topBarStatusLeft}>
              <Chip className={classes.customChip} label='Video EnTrevista' color='primary'/>
              <span><small className={classes.statusPoint} /> Pendiente</span>
            </div>
            <div className={classes.topBarStatusRight}>
              <Typography color='secondary' variant='h6'>
                Ene, 12, 2019 - 2:00 PM
              </Typography>
            </div>
          </div>
          <div className={classes.description}>
            <Typography color='secondary' variant='h6'>Excepciòn 1</Typography>
            <Typography color='secondary' variant='h5'>Tarea sin asignar, ejecución en 1 hora</Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <EmojiPeopleIcon color='primary' /> Krowder: Piero Rodriguez
              </li>
              <li className={classes.listItem}>
                <PersonIcon color='primary' /> Jheyson Pedro Portocarrero Alfaro
              </li>
              <li className={classes.listItem}>
                <WorkIcon color='primary' /> Administrador de Contratos Legales
              </li>
              <li className={classes.listItem}>
                <BusinessIcon color='primary' /> Nestle Corp.
              </li>
              <li className={classes.listItem}>
                <GroupIcon color='primary' /> Grupo en Carta
              </li>
            </ul>
          </div>
        </div>
        {/* <Typography className={classes.title} color='textSecondary' gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant='h5' component='h2'>
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          adjective
        </Typography>
        <Typography variant='body2' component='p'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
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
