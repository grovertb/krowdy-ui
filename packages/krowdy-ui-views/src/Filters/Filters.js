import React from 'react'
import { Card, CardHeader, CardContent, Button, withStyles } from '@krowdy-ui/core'

export const styles = () => ({
  cardContent: {
    display       : 'flex',
    justifyContent: 'center'
  }
})

const Filters = (props) => {
  const {
    classes
  }  = props

  return (
    <div>
      <Card>
        <CardHeader
          title='Filtros de candidatos' />
        <CardContent className={classes.cardContent}>
          <Button color='primary'>Añadir filtro</Button>
        </CardContent>
      </Card>

    </div>)
}

export default withStyles(styles,{ name: 'Filters' })(Filters)
