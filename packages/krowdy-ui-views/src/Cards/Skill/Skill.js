import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core'


export const styles = theme => ({
  content: {
    padding: theme.spacing(0, 1.5, 1.5, 1.5)
  },
  defaultColor: {
    backgroundColor: theme.palette.grey[300]
  },
  expanded: {
    margin: theme.spacing(0.8, 0),
    minHeight: 32,
  },
  heading: {
    fontWeight: 'bold',
  },
  inputContent: {
    display: 'flex',
    flex: 1,
    margin: theme.spacing(0, 1)
  },
  marginBottomStandar: {
    margin: theme.spacing(0, 0, 1, 0)
  },
  paddingSide: {
    minHeight: 32,
    padding: theme.spacing(0, 1)
  },
  size: {
    fontSize: 14,
  },
  styleLess: {
    margin: 0,
    padding: 0,
  },
})


const SkillCard = props => {
  const {
    classes,
    content,
    color = 'defaultColor',
    expandIcon,
    onChange = () => { },
    title,
  } = props


  return (

    <div className={classes.inputContent} >
      <ExpansionPanel classes={{ root: clsx(classes[color], classes.styleLess) }} onChange={onChange}>

        <ExpansionPanelSummary
          classes={{ content: classes.styleLess, expanded: classes.expanded, root: classes.paddingSide }}
          expandIcon={expandIcon ? expandIcon : null}
        >
          <Typography component='div' className={clsx(classes.heading, classes.size)}>{(title) ? title : null}</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails classes={{ root: clsx(classes.styleLess) }} className={classes.content}>
          <Typography component='div' className={clsx(classes.content, classes.size)}>
            {(content) ? content : null}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )

}

SkillCard.propTypes = {
  classes: PropTypes.shape({
  }),
  color: PropTypes.oneOf(['defaultColor']),
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  expandIcon: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}

SkillCard.muiName = 'SkillCard'

export default withStyles(styles, { name: 'KrowdySkillCard' })(SkillCard)