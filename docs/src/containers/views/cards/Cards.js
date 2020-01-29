import React from 'react'
import { Grid, Avatar, Card, CardContent, CardHeader } from '@krowdy-ui/core'
import { Close } from '@material-ui/icons'
import { makeStyles } from '@krowdy-ui/styles'

const useStyles = makeStyles({
  content: {
    '&:last-child': {
      paddingBottom: 20
    },
    padding: 20
  },
  deleteIcon: {
    display : 'none',
    position: 'absolute',
    right   : 10
  },
  flexRow: {
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'row',
    marginBottom : 10
  },
  headerCard: {
    borderColor: 'black',
    margin     : '5%'
  },
  styleLess: {
    '&:last-child': {
      paddingBottom: 0
    },
    margin : 0,
    padding: 0
  }
})

export default function () {
  const classes = useStyles()

  return (
    <Grid container justify='center'>
      <Grid className={classes.item} item xs={4} >
        <Card outlined='square'>
          <CardHeader
            action={<Close />}
            title='Card' />
          <CardContent classes={{ root: classes.styleLess }}> Define cuáles de los campos del perfil del candidato deben ser
             obligatorios y cuáles no deberían aparecer. cuáles no deberían aparecer </CardContent>
        </Card>
      </Grid >
      <Grid className={classes.headerCard} item xs={5}>
      </Grid>
      <Grid className={classes.item} item xs={4} >
        <Card
          hoverable outlined='round'
          sizePadding='large'>
          <CardHeader
            action={<Close />}
            avatar={<Avatar src='https://s3.amazonaws.com/cdn.krowdy.com/media/images/icon_VideoCuestionario.png' variant='square' />}
            title='Card' />
          <CardContent classes={{ root: classes.styleLess }} > Define cuáles de los campos del perfil del candidato deben ser
             obligatorios y cuáles no deberían aparecer. cuáles no deberían aparecer </CardContent>
        </Card>
      </Grid>
    </Grid >
  )
}

