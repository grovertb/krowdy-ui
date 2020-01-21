import React from 'react'
import { Grid, Avatar } from '@krowdy-ui/core'
import { CardContainer } from '@krowdy-ui/views/Cards'
import { AudioRecorder, RadioForm } from '@krowdy-ui/views'
import { Close, Info, ExpandMore, ExpandLess } from '@material-ui/icons'
import { makeStyles } from '@krowdy-ui/styles'

const useStyles = makeStyles({
  colorCard: {
    backgroundColor: '#F2F4F7'
  },
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

  const [expand, setExpand] = React.useState(true)

  const classes = useStyles()

  return (
    <Grid container justify='center' className={classes.root}>
      <Grid item xs={4} className={classes.item}>
        <CardContainer
          title='Tasks'
          content={<div>Define cuáles de los campos del perfil del candidato deben ser
             obligatorios y cuáles no deberían aparecer. cuáles no deberían aparecer</div>}
          disabledHover
          rightElement={<Close />
          }
        />
      </Grid >
      <Grid item xs={4} className={classes.item} >
        <CardContainer
          title='Tasks'
          content={<div>Define cuáles de los campos del perfil del candidato deben ser
             obligatorios y cuáles no deberían aparecer. cuáles no deberían aparecer</div>}
          avatar={<Avatar src='https://instaperfil.com/images/instaperfilseguidores.png' variant='square' />}
        />
      </Grid >
      <Grid item xs={9} className={classes.item} >
        <CardContainer
          classes={{ root: classes.colorCard }}
          title={<div><span className={classes.title}>Creativity</span> <Info classes={{ root: classes.informationIcon }} size='small' color='primary' /></div>}
          rightElement={(!expand) ? <ExpandMore /> : <ExpandLess />}
          content={<div className={{ [classes.expand]: !expand }}><span className={classes.cursive}>Selecciona el nivel que necesitas de esta competencia</span>
            <RadioForm
              inputs={inputsRadios}
              valueDefault='value2'
              isRow
              /* onChange={(e)=> console.log(e.target)} */ />
            <span>Capacidad para fijar politicas organizacionales y comunicarlas de manera clara y precisa en todos los niveles
              de la orgniazacion asi como tambien comunicar fracasos o acontecimientos negativos sin dobleces ni enganios, decir siempre
              la verdad y lo que siente.
            </span>
            <AudioRecorder />
          </div>}
          cardHeaderProps={{
            onClickElementRight: () => {
              setExpand(!expand)
            }
          }}
          disabledHover
        />
      </Grid >
    </Grid >
  )
}

