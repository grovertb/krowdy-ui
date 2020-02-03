import React from 'react'
import { makeStyles } from '@krowdy-ui/core/styles'
import { TabPanel, AppBar, Tabs, Tab } from '@krowdy-ui/core'

function a11yProps(index) {
	return {
		'aria-controls': `simple-tabpanel-${index}`,
		id: `simple-tab-${index}`
	}
}

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		flexGrow: 1
	}
}))

export default function SimpleTabs() {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Tabs aria-label='simple tabs example' onChange={handleChange} value={value}>
					<Tab label='Item One' {...a11yProps(0)} />
					<Tab label='Item Two' {...a11yProps(1)} />
					<Tab label='Item Three' {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel index={0} value={value}>
				Item One
      </TabPanel>
			<TabPanel index={1} value={value}>
				Item Two
      </TabPanel>
			<TabPanel index={2} value={value}>
				Item Three
      </TabPanel>
		</div>
	)
}
