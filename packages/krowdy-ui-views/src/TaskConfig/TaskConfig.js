import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { AppBar, makeStyles, Paper, Tab, TabPanel, Tabs } from '@krowdy-ui/core'

const TaskConfig = ({
  panelTask,
  panelResponsable,
  panelCandidates,
  action,
  back,
  urlIconTask,
  actionFooter,
  taskTextField
}) => {
  const classes = useStyles()
  const [ value, setValue ] = useState(0)

  const panelConfigs = useMemo(() => {
    const panelConfigs = [ {
      label: 'Tarea',
      panel: panelTask
    }, {
      label: 'Candidatos',
      panel: panelCandidates
    }, {
      label: 'Responsables',
      panel: panelResponsable
    } ]

    return panelConfigs.filter(({ panel }) => panel)
  }, [ panelCandidates, panelResponsable, panelTask ])

  const _handleChange = (_, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} variant='outlined'>
        <div className={classes.headerLeft} >
          {back}
          {urlIconTask && (
            <img
              alt='logo'
              className={classes.logo}
              src={urlIconTask} />
          )}
          {taskTextField}
        </div>
        <AppBar
          className={classes.appBar}
          position='static'>
          <Tabs
            centered
            classes={{
              indicator: classes.indicator
            }}
            indicatorColor='primary'
            onChange={_handleChange}
            value={value}>
            {panelConfigs.map(({ label }, index) => (
              <Tab
                classes={{
                  textColorInherit  : classes.textColor,
                  textColorPrimary  : classes.textColor,
                  textColorSecondary: classes.textColor
                }}
                className={classes.tab}
                key={`TabPanel-${index}`}
                label={label} />
            ))}
          </Tabs>
        </AppBar>
        <div className={classes.actionContainer}>
          {action}
        </div>
      </Paper>
      <div className={classes.content}>
        {panelConfigs.map(({ panel }, index) => (
          <TabPanel index={index} key={`Panel-${index}`} value={value}>
            {panel}
          </TabPanel>
        ))}
      </div>
      <Paper className={classes.actionContainerFooter} variant='outlined'>
        { actionFooter }
      </Paper>
    </div>
  )
}

TaskConfig.propTypes = {
  action          : PropTypes.node,
  actionFooter    : PropTypes.node,
  back            : PropTypes.node,
  panelCandidates : PropTypes.node,
  panelResponsable: PropTypes.node,
  panelTask       : PropTypes.node,
  taskTextField   : PropTypes.node,
  urlIconTask     : PropTypes.string
}

const useStyles = makeStyles((theme) => ({
  actionContainer: {
    alignItems    : 'center',
    display       : 'flex',
    flex          : 1,
    justifyContent: 'flex-end'
  },
  actionContainerFooter: {
    alignItems    : 'center',
    borderRadius  : 0,
    display       : 'flex',
    height        : 56,
    justifyContent: 'flex-end',
    padding       : theme.spacing(1.5, 2.5)
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
    boxShadow      : 'none',
    color          : theme.palette.common.black,
    flex           : 1
  },
  arrowBackIcon: {
    height: 20,
    width : 20
  },
  arrowIcon: {
    color : theme.palette.grey[800],
    margin: theme.spacing(0, 1)
  },
  container: {
    height: '100%'
  },
  content: {
    '& > div': {
      height: '100%'
    },
    backgroundColor: theme.palette.secondary[10],
    height         : 'calc(100% - 112px)'
  },
  groupActionTitle: {
    alignItems: 'center',
    display   : 'flex'
  },
  header: {
    display       : 'flex',
    justifyContent: 'space-between',
    paddingRight  : theme.spacing(2.5),
    width         : '100%'
  },
  headerLeft: {
    alignItems: 'center',
    display   : 'flex',
    flex      : 1
  },
  indicator: {
    height: 3
  },
  logo: {
    height     : 24,
    marginRight: theme.spacing(1.5),
    width      : 24
  },
  main: {
    overflow: 'hidden',
    padding : 0
  },
  nameTask: {
    fontSize   : 18,
    fontStyle  : 'normal',
    fontWeight : 'bold',
    marginRight: theme.spacing(1.5)
  },
  paper: {
    alignItems    : 'center',
    borderRadius  : 0,
    display       : 'flex',
    height        : 56,
    justifyContent: 'space-between',
    padding       : theme.spacing(1.5, 2.5),
    width         : '100%'
  },
  tab: {
    textTransform: 'initial'
  },
  task: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'space-between',
    width         : '100%'
  },
  textColor: {
    color     : theme.palette.grey[800],
    fontWeight: 'bold',
    opacity   : 1
  }
}
), { name: 'TaskConfig' })

export default TaskConfig
