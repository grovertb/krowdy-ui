import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core/styles'
import { Card, CardContent } from '@krowdy-ui/core'

export const styles = () => ({
  headerLeft: {
    flex: '1'
  }
})

const CardUser = props => {
  const {
    title,
  } = props

  return (
    <div style={{margin: 10}}>
      <Card>
        <CardContent>
            Hola: {title}
        </CardContent>
      </Card>
    </div>
  )
}

CardUser.propTypes = {
  title: PropTypes.string,
}

CardUser.muiName = 'CardUser';

export default withStyles(styles, { name: 'KrowdyCardUser' })(CardUser)