import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { Inputs, RadioForm } from '@krowdy-ui/views'
import { SkillCard } from '@krowdy-ui/views/Cards'
import { RemoveCircleOutline, DragIndicator, Info, ExpandMore } from '@material-ui/icons'
import { makeStyles } from '@krowdy-ui/styles'

const useStyle = makeStyles({
  align: {
    verticalAlign: 'bottom'
  },
  button: {
    paddingTop: '1rem'
  },
  container: {
    margin: '30px 20px'
  },
  iconDragContainer: {
    paddingTop: '1rem'
  },
  skillsContainer: {
    margin: 'auto',
    width : '100%'
  },
  text: {
    fontSize: 12
  }

})
const inputsRadios = [
  {
    _id  : '1',
    label: 'label1',
    value: '1'
  },
  {
    _id  : '2',
    label: 'label2',
    value: 'value2'
  },
  {
    _id  : '3',
    label: 'label3',
    value: 'value3'
  },
  {
    _id  : '4',
    label: 'label4',
    value: 'value4'
  },
  {
    _id  : '5',
    label: 'label5',
    value: 'value5'
  } ]

export default function () {
  const classes = useStyle()

  return (
    <>
      <Grid className={classes.container} container  >
        <Grid item tabIndex='-1' xs={11}>
          <Inputs
            iconDrag={<DragIndicator />}
            iconRemove={<RemoveCircleOutline color='error' />}
            item={{ _id: '123', instruction: () => { } }}
            order={1}
            showInstructions />
        </Grid>
      </Grid>
      <div className={classes.skillsContainer}>
        <SkillCard
          colorCard='gray'
          content={
            <div>
              <span className={classes.cursive}>Selecciona el nivel que necesitas de esta competencia</span>
              <RadioForm
                inputs={inputsRadios}
                isRow
                valueDefault='value2' />
              <span className={classes.text}>Capacidad para fijar politicas organizacionales y comunicarlas de manera clara y precisa en todos los niveles
              de la orgniazacion asi como tambien comunicar fracasos o acontecimientos negativos sin dobleces ni enganios, decir siempre
              la verdad y lo que siente.
              </span>
            </div>
          }
          expandIcon={<ExpandMore />}
          iconDrag={<DragIndicator className={classes.align} />}
          iconRemove={<RemoveCircleOutline color='error' />}
          title={<div><span className={classes.align}>Creativity</span> <Info classes={{ root: classes.align }} color='primary' size='small' /></div>} />
      </div>
    </>
  )
}
