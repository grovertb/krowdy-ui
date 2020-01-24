import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/styles'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core'

export const styles = theme => ({
  alignSelf: {
    alignSelf: 'flex-start'
  },
  button: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    margin  : 0,
    minWidth: 0,
    padding : 0
  },
  content: {
    padding: theme.spacing(0, 1.5, 1.5, 1.5)
  },
  defaultColor: {
    backgroundColor: theme.palette.grey[0]
  },
  expanded: {
    margin   : '10px 0',
    minHeight: '0'
  },
  gray: {
    backgroundColor: theme.palette.grey[400]
  },
  heading: {
    fontWeight   : 'bold',
    verticalAlign: 'middle'
  },
  iconDragContainer: {
    color: theme.palette.grey[500]
  },
  inputContent: {
    display: 'flex',
    flex   : 1,
    margin : '0 8px'
  },
  size: {
    fontSize: 14
  },
  styleLess: {
    margin : 0,
    padding: 0
  },
  summeryRoot: {
    padding: theme.spacing(0, 1.5)
  }
})

const SkillCard = props => {
  const {
    classes,
    content,
    color = 'defaultColor',
    defaultExpanded,
    expandIcon,
    onChange = () => { },
    title
  } = props

  return (

    <div className={classes.container} >
      <ExpansionPanel
        classes={{ root: clsx(classes[color], classes.styleLess) }}
        defaultExpanded={defaultExpanded}
        onChange={onChange}>

        <ExpansionPanelSummary
          classes={{ content: classes.styleLess, expanded: classes.styleLess, root: classes.summeryRoot }}
          className={classes.expanded}
          expandIcon={expandIcon ? expandIcon : null}>
          <Typography className={clsx(classes.styleLess, classes.heading, classes.size)} component='div'>{(title) ? title : null}</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails classes={{ root: classes.styleLess }} className={classes.expandDetails} >
          <Typography className={clsx(classes.content, classes.size)} component='div'>
            {(content) ? content : null}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div >
  )
}

SkillCard.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string,
    content  : PropTypes.string,
    heading  : PropTypes.string,
    size     : PropTypes.string
  }),
  color          : PropTypes.oneOf([ 'defaultColor', 'gray' ]),
  content        : PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]),
  defaultExpanded: PropTypes.bool,
  expandIcon     : PropTypes.node,
  title          : PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]).isRequired
}

SkillCard.muiName = 'SkillCard'

export default withStyles(styles, { name: 'KrowdySkillCard' })(SkillCard)
