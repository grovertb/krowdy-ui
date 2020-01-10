import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core/styles'
import { Card, CardContent } from '@krowdy-ui/core'

export const styles = () => ({
    headerLeft: {
        flex: '1'
    }
})

const CardFilter = props => {
    const {
        title,
    } = props

    return (
        <div style={{ margin: 10 }}>
            <Card>
                <CardContent>
                    cardFilter: {title}
                </CardContent>
            </Card>
        </div>
    )
}

CardFilter.propTypes = {
    title: PropTypes.string,
}

CardFilter.muiName = 'CardFilter';

export default withStyles(styles, { name: 'KrowdyCardFilter' })(CardFilter)