import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/styles'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core'

export const styles = theme => ({
  content: {
    padding: theme.spacing(0, 1.5, 1.5, 1.5)
  },
  defaultColor: {
    backgroundColor: theme.palette.grey[0]
  },
  expanded: {
    margin   : theme.spacing(0, 1.5),
    minHeight: 0
  },
  gray: {
    backgroundColor: theme.palette.grey[400]
  },
  heading: {
    fontWeight   : 'bold',
    paddingLeft  : 12,
    verticalAlign: 'middle'
  },
  iconDragContainer: {
    color: theme.palette.grey[500]
  },
  size: {
    fontSize: 14
  },
  styleLess: {
    margin : 0,
    padding: 0
  }
})

const CardExpand = props => {
  const {
    classes,
    content = '',
    color = 'defaultColor',
    defaultExpanded,
    expandIcon,
    onChange = () => { },
    title
  } = props

  return (

    <div className={classes.container} >
      <ExpansionPanel
        classes={{ expanded: classes.expanded, root: clsx(classes[color], classes.styleLess) }}
        defaultExpanded={defaultExpanded}
        onChange={onChange}>

        <ExpansionPanelSummary
          classes={{ content: classes.styleLess, expanded: classes.expanded, root: classes.styleLess }}
          expandIcon={expandIcon ? expandIcon : null}>
          <Typography className={clsx(classes.heading, classes.size)} component='div'>
            {title}
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails classes={{ root: classes.styleLess }} className={classes.expandDetails} >
          <Typography className={clsx(classes.content, classes.size)} component='div'>
            {content}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div >
  )
}

CardExpand.propTypes = {
  classes: PropTypes.shape({
    container    : PropTypes.string,
    content      : PropTypes.string,
    expandDetails: PropTypes.string,
    heading      : PropTypes.string,
    size         : PropTypes.string
  }),
  color          : PropTypes.oneOf([ 'defaultColor', 'gray' ]),
  content        : PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]),
  defaultExpanded: PropTypes.bool,
  expandIcon     : PropTypes.node,
  onChange       : PropTypes.func,
  title          : PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]).isRequired
}

CardExpand.muiName = 'CardExpand'

export default withStyles(styles, { name: 'KrowdyCardExpand' })(CardExpand)
