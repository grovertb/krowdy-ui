import React from 'react'
import { Grid, Avatar,Card,CardContent, Typography } from '@krowdy-ui/core'
import { RadioForm } from '@krowdy-ui/views'
import { CardContainer , SkillCard ,HeaderCard } from '@krowdy-ui/views/Cards'
import { Close , Info , ExpandMore, DragIndicator , Delete as DeleteIcon } from '@material-ui/icons'
import { makeStyles } from '@krowdy-ui/styles'

const useStyles = makeStyles({
  boxContainer: {
    '&:hover': {
      border: '1px solid #40A9FF'
    },
    border      : '1px solid #E8E8E8',
    borderRadius: 8,
    flex        : 1,
    minHeight   : 36,
    padding     : '10px 20px'
  },
  content: {
    '&:last-child': {
      paddingBottom: 20
    },
    padding: 20
  },
  cursive: {
    fontStyle: 'italic'
  },
  flexRow: {
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-aro  und',
    marginBottom : 10
  },
  headerCard: {
    borderColor: 'black',
    margin     : '5%'
  },
  informationIcon: {
    verticalAlign: 'middle'
  },
  item: {
    margin: '3% 3% 0 3%'
  },
  styleLess: {
    '&:last-child': {
      paddingBottom: 0
    },
    margin : 0,
    padding: 0
  },
  tacing: {
    alignItems: 'center',
    margin    : 'auto',
    maxWidth  : 315
  },
  text: {
    fontSize: 12
  }
})

const inputsRadios = [
  {
    _id  : 1,
    label: 'label1',
    value: '1'
  },
  {
    _id  : 2,
    label: 'label2',
    value: 'value2'
  },
  {
    _id  : 3,
    label: 'label3',
    value: 'value3'
  }
]

/* const InputWithIcons = () =>{

} */

export default function () {
  const classes = useStyles()

  return (
    <Grid container justify='center'>
      <Grid className={classes.item} item xs={4}>
        <CardContainer
          action={<Close />}
          content='Define cuáles de los campos del perfil del candidato deben ser
             obligatorios y cuáles no deberían aparecer. cuáles no deberían aparecer'
          disabledHover
          divider
          sizePadding='small'
          title='Card' />
      </Grid >
      <Grid className={classes.item} item xs={4} >
        <CardContainer
          avatar={<Avatar src='https://s3.amazonaws.com/cdn.krowdy.com/media/images/icon_VideoCuestionario.png' variant='square' />}
          content='Define cuáles de los campos del perfil del candidato deben ser
          obligatorios y cuáles no deberían aparecer.cuáles no deberían aparecer'
          title='Card' />
      </Grid >
      <Grid className={classes.item} item xs={9} >

        <SkillCard
          content={
            <div>
              <span className={classes.cursive}>Selecciona el nivel que necesitas de esta competencia</span>
              <RadioForm
                inputs={inputsRadios}
                isRow
                value='value2' />
              <span className={classes.text}>Capacidad para fijar politicas organizacionales y comunicarlas de manera clara y precisa en todos los niveles
              de la orgniazacion asi como tambien comunicar fracasos o acontecimientos negativos sin dobleces ni enganios, decir siempre
              la verdad y lo que siente.
              </span></div>
          }
          expandIcon={<ExpandMore />}
          title={<div><span className={classes.title}>Creatividad</span> <Info classes={{ root: classes.informationIcon }} color='primary' size='small' /></div>} />
      </Grid >
      <Grid className={classes.headerCard} item xs={5}>
        <HeaderCard
          title='Tipo de seguimiento' />
      </Grid>
      <Grid item xs={3} >
        <RadioForm
          inputs={
            [ { _id  : '1',
              label: 'Mensajeria',
              value: '1' },
            { _id  : '2',
              label: 'Mensajeria',
              value: '2' }
            ]}
          outlined='round'
          value='value2' />
      </Grid>

      <Grid item xs={5}>
        <Card className={classes.tacing}>
          <HeaderCard action={<Info color='primary' />}shadow title='Mensajeria' />
          <CardContent className={classes.content}>
            <div >{inputsRadios.map((element) => (<div
              className={classes.flexRow}
              id={element._id}
              key={element._id}>
              <DragIndicator color='disabled' />
              <div className={classes.boxContainer}>
                <Typography> {element.label} </Typography>
                <div> <DeleteIcon color='error' /> </div>
              </div>
            </div>
            ))}</div>
          </CardContent>
        </Card>
      </Grid>
    </Grid >
  )
}

