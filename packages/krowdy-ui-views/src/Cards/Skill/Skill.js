import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core'


export const styles = theme => ({
  container: {
    display: 'flex',
    flex: 1,
    margin: theme.spacing(0, 1)
  },
  content: {
    padding: theme.spacing(0, 1.5, 1.5, 1.5)
  },
  defaultColor: {
    backgroundColor: theme.palette.grey[0]
  },
  expanded: {
    margin: '10px 0',
    minHeight: '0',
  },
  gray: {
    backgroundColor: theme.palette.grey[400]
  },
  heading: {
    fontWeight: 'bold',
    verticalAlign: 'middle'
  },
  size: {
    fontSize: 14,
  },
  styleLess: {
    margin: 0,
    padding: 0,
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
    title,
  } = props

  return (

    <div className={classes.container} >
      <ExpansionPanel
        classes={{ root: clsx(classes[color], classes.styleLess) }}
        onChange={onChange}
        defaultExpanded={defaultExpanded}>

        <ExpansionPanelSummary
          className={classes.expanded}
          classes={{ content: classes.styleLess, expanded: classes.styleLess, root: classes.summeryRoot }}
          expandIcon={expandIcon ? expandIcon : null}
        >
          <Typography component='div' className={clsx(classes.styleLess, classes.heading, classes.size)}>{(title) ? title : null}</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails classes={{ root: classes.styleLess }} className={classes.expandDetails} >
          <Typography component='div' className={clsx(classes.content, classes.size)}>
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
    content: PropTypes.string,
    heading: PropTypes.string,
    size: PropTypes.string
  }),
  color: PropTypes.oneOf(['defaultColor', 'gray']),
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  defaultExpanded: PropTypes.bool,
  expandIcon: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}

SkillCard.muiName = 'SkillCard'

export default withStyles(styles, { name: 'KrowdySkillCard' })(SkillCard)