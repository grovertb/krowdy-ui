import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const noop = () => {}

const styles = theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
    color          : theme.palette.primary.contrastText
  },
  root: {
    width: 600
  }
})

function AdvancedTabs(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Paper className={classes.appBar}>
        <Tabs onChange={noop} value={0}>
          <Tab label='New Arrivals in the Longest Text of Nonfiction' />
          <Tab label='Item Two' />
          <Tab label='Item Three' />
        </Tabs>
      </Paper>
      <Paper className={classes.appBar}>
        <Tabs
          onChange={noop} scrollButtons='auto' value='two'
          variant='scrollable'>
          <Tab label='Item One' />
          <Tab label='Item Two' value='two' />
          <Tab label='Item Three' />
          <Tab label='Item Four' />
          <Tab label='Item Five' />
          <Tab label='Item Six' />
          <Tab label='Item Seven' />
        </Tabs>
      </Paper>
      <Paper className={classes.root}>
        <Tabs
          onChange={noop}
          scrollButtons='on'
          textColor='secondary'
          value={0}
          variant='scrollable'>
          <Tab icon={<Icon>phone</Icon>} label='Item One' />
          <Tab icon={<Icon>favorite</Icon>} label='Item Two' />
          <Tab icon={<Icon>person_pin</Icon>} label='Item Three' />
          <Tab icon={<Icon>help</Icon>} label='Item Four' />
          <Tab icon={<Icon>shopping_basket</Icon>} label='Item Five' />
          <Tab icon={<Icon>thumb_down</Icon>} label='Item Six' />
          <Tab icon={<Icon>thumb_up</Icon>} label='Item Seven' />
        </Tabs>
      </Paper>
      <Paper className={classes.appBar}>
        <Tabs
          onChange={noop} scrollButtons='off' value={0}
          variant='scrollable'>
          <Tab icon={<Icon>phone</Icon>} />
          <Tab icon={<Icon>favorite</Icon>} />
          <Tab icon={<Icon>person_pin</Icon>} />
          <Tab icon={<Icon>help</Icon>} />
          <Tab icon={<Icon>shopping_basket</Icon>} />
          <Tab icon={<Icon>thumb_down</Icon>} />
          <Tab icon={<Icon>thumb_up</Icon>} />
        </Tabs>
      </Paper>
    </div>
  )
}

AdvancedTabs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AdvancedTabs)
