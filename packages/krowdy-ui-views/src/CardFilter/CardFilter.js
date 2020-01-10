import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core/styles'
import { Card, CardContent, CardHeader, Avatar } from '@krowdy-ui/core'

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
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            R </Avatar>
                    }
                    title={title}
                    subheader="September 14, 2016"
                />
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