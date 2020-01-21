import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'



export const styles = theme => ({
  defaultColor: {
    backgroundColor: '#F2F4F7'
  },
  heading: {
    fontWeight: 'bold',
  },
  root: {
    fontFamily: 'Roboto',
    fontSize: 14,
    width: '100%',
  },
  size: {
    fontSize: 14,
  },
})


const CardUser = props => {
  const {
    classes,
    content,
    color = 'defaultColor',
    expandIcon,
    title,
  } = props
  return (
    <div className={classes.root}>
      <ExpansionPanel classes={{ root: classes[color] }}>
        <ExpansionPanelSummary
          expandIcon={expandIcon ? expandIcon : null}
          id='panel1a-header'
        >
          <Typography component='div' className={clsx(classes.heading, classes.size)}>{(title) ? title : null}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography component='div' className={clsx(classes.content, classes.size)}>
            {(content) ? content : null}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel></div>)

}

CardUser.propTypes = {
  classes: PropTypes.object,
  color: PropTypes.oneOf(['defaultColor']),
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  expandIcon: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}

CardUser.muiName = 'CardUser'

export default withStyles(styles, { name: 'KrowdyCardUser' })(CardUser)