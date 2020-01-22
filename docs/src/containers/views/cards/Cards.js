import React from 'react'
import { Grid, Avatar } from '@krowdy-ui/core'
import { CardContainer, SkillCard } from '@krowdy-ui/views/Cards'
import { /* AudioRecorder, */ RadioForm } from '@krowdy-ui/views'
import { Close, Info } from '@material-ui/icons'
import { makeStyles } from '@krowdy-ui/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


const useStyles = makeStyles({
  cursive: {
    fontStyle: 'italic'
  },
  expand: {
    display: 'none'
  },
  informationIcon: {
    fontSize: '1rem',
    verticalAlign: 'middle'
  },
  item: {
    margin: '3% 3% 0 3%',
  },
  text: {
    fontSize: 12
  },
  title: {
    lineHeight: '20px',
    verticalAlign: 'middle'
  },
})

const inputsRadios = [
  {
    _id: '1',
    label: 'label1',
    value: '1',
  },
  {
    _id: '2',
    label: 'label2',
    value: 'value2',
  },
  {
    _id: '3',
    label: 'label3',
    value: 'value3',
  },
  {
    _id: '4',
    label: 'label4',
    value: 'value4',
  },
  {
    _id: '5',
    label: 'label5',
    value: 'value5',
  },]

export default function () {

  const classes = useStyles()

  return (
    <Grid container justify='center' className={classes.root}>
      <Grid item xs={4} className={classes.item}>
        <CardContainer
          title='Tasks'
          content='Define cuáles de los campos del perfil del candidato deben ser
             obligatorios y cuáles no deberían aparecer. cuáles no deberían aparecer'
          disabledHover
          action={<Close />}
          sizePadding='small'
        />
      </Grid >
      <Grid item xs={4} className={classes.item} >
        <CardContainer
          title='Tasks'
          content='Define cuáles de los campos del perfil del candidato deben ser
          obligatorios y cuáles no deberían aparecer.cuáles no deberían aparecer'
          avatar={<Avatar src='https://s3.amazonaws.com/cdn.krowdy.com/media/images/icon_VideoCuestionario.png' variant='square' />}
        />
      </Grid >
      <Grid item xs={9} className={classes.item} >

        <SkillCard
          title={<div><span className={classes.title}>Creatividad</span> <Info classes={{ root: classes.informationIcon }} size='small' color='primary' /></div>}
          expandIcon={<ExpandMoreIcon />}
          content={
            <div>
              <span className={classes.cursive}>Selecciona el nivel que necesitas de esta competencia</span>
              <RadioForm
                inputs={inputsRadios}
                value='value2'
                isRow />
              <span className={classes.text}>Capacidad para fijar politicas organizacionales y comunicarlas de manera clara y precisa en todos los niveles
              de la orgniazacion asi como tambien comunicar fracasos o acontecimientos negativos sin dobleces ni enganios, decir siempre
              la verdad y lo que siente.
          </span></div>
          }
          colorCard='gray'
        />
      </Grid >
    </Grid >
  )
}

