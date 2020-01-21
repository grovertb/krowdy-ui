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

function SimpleTabs(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Paper className={classes.appBar}>
        <Tabs onChange={noop} value={0}>
          <Tab label='Item One' />
          <Tab label='Item Two' />
          <Tab disabled label='Item Three' />
        </Tabs>
      </Paper>
      <Paper className={classes.root}>
        <Tabs
          centered onChange={noop} textColor='secondary'
          value={1}>
          <Tab label='Item One' />
          <Tab label='Item Two' />
          <Tab disabled label='Item Three' />
        </Tabs>
      </Paper>
      <Paper>
        <Tabs
          onChange={noop} textColor='secondary' value={2}
          variant='fullWidth'>
          <Tab label='Item One' />
          <Tab label='Item Two' />
          <Tab label='Item Three' />
        </Tabs>
      </Paper>
      <Paper>
        <Tabs
          onChange={noop} textColor='secondary' value={0}
          variant='fullWidth'>
          <Tab icon={<Icon>phone</Icon>} />
          <Tab icon={<Icon>favorite</Icon>} />
          <Tab disabled icon={<Icon>person_pin</Icon>} />
        </Tabs>
      </Paper>
      <Paper>
        <Tabs
          onChange={noop} textColor='secondary' value={1}
          variant='fullWidth'>
          <Tab icon={<Icon>phone</Icon>} label='RECENTS' />
          <Tab icon={<Icon>favorite</Icon>} label='FAVORITES' />
          <Tab disabled icon={<Icon>person_pin</Icon>} label='NEARBY' />
        </Tabs>
      </Paper>
    </div>
  )
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleTabs)
