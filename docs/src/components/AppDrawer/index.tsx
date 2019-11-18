import React from 'react'


import { Theme } from '@material-ui/core'
import { makeStyles } from '@krowdy-ui/styles'
// import { 
//   Toolbar, 
//   AppBar, 
//   IconButton, 
//   SwipeableDrawer,
//   Collapse,
//   Divider,
//   Link,
//   List,
//   ListItem,
//   Typography,
//   Button
// } from '@krowdy-ui/core'

// import pages from '../../routes/pages'
// import pkg from '../../../package.json'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    width: 240,
    // backgroundColor: theme.shadows[1],
  },
  // https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items
  toolbarIe11: {
    display: 'flex',
  },
  toolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing(3),
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  itemLeaf: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  title: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}))

export default function AppDrawer() {
  const classes = useStyles()
  console.log('Grover: AppDrawer -> classes', classes)

  return (
    <div>
      AppDrawer
      {/* <SwipeableDrawer
        onClose={_handleToggleDrawer}
        onOpen={_handleToggleDrawer}
        open={drawerOpen}
        classes={{
          paper: classes.paper
        }}
      >
        <div className={classes.toolbarIe11}>
          <div className={classes.toolbar}>
            <Link className={classes.title} href='/' variant="h6" color="inherit">
              Material-UI
            </Link>
            {
              pkg.version ? (
                <Typography
                // onClick={onClose}
                // href="https://material-ui.com/versions/"
                  color="textSecondary"
                  variant="caption"
                >
                  {`v${pkg.version}`}
                </Typography>
              ) : null
            }
          </div>
        </div>
        <Divider />
        <List>
          {
            pages.map(({label, routes = []}, key) =>(
              <React.Fragment key={`path-${key}`}>
                <ListItem disableGutters className={classes.itemLeaf}>
                  <Button>{label}</Button>
                  <Collapse in={true} unmountOnExit>
                    <List disablePadding>
                      {
                        routes.map((route, keyRoute)=> (
                          <ListItem disableGutters className={classes.itemLeaf} button key={`route-${key}-${keyRoute}`}>
                            <Button>{route.label}</Button>
                          </ListItem>
                        ))
                      }
                    </List>
                  </Collapse>
                </ListItem>
              </React.Fragment>
            ))
          }
        </List>
      </SwipeableDrawer> */}
    </div>
  )
}