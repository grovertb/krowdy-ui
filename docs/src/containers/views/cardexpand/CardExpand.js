import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { CardExpand } from '@krowdy-ui/views'
import { ExpandMore, Info } from '@material-ui/icons'
import { makeStyles } from '@krowdy-ui/styles'

const useStyles = makeStyles({
  cursive: {
    fontStyle: 'italic'
  },
  informationIcon: {
    verticalAlign: 'middle'
  },
  text: {
    display : 'block',
    fontSize: 12
  }
})

export default function () {
  const classes = useStyles()

  return (
    <Grid container justify='center'>
      <Grid item xs={6}>
        <CardExpand
          content={
            <div>
              <span className={classes.cursive}>Selecciona el nivel que necesitas de esta competencia</span>
              <span className={classes.text}>Capacidad para fijar politicas organizacionales y comunicarlas de manera clara y precisa en todos los niveles
              de la orgniazacion asi como tambien comunicar fracasos o acontecimientos negativos sin dobleces ni enganios, decir siempre
              la verdad y lo que siente.
              </span></div>
          }
          expandIcon={<ExpandMore />}
          title={<div><span className={classes.title}>Creatividad</span> <Info classes={{ root: classes.informationIcon }} color='primary' size='small' /></div>} />

      </Grid>
    </Grid >
  )
}

