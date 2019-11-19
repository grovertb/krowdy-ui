import React from 'react'

import { makeStyles } from '@krowdy-ui/styles'

import { 
  SwipeableDrawer,
  // Collapse,
  Divider,
  Link,
  List,
  Theme,
  // ListItem,
  Typography,
  // Button
} from '@krowdy-ui/core'

import AppDrawerItem from './AppDrawerItem'

import pages, { Page } from '../../routes/pages'

interface Props {
  onToggleDrawer: React.ReactEventHandler<{}>;
  drawerOpen: boolean
}

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

function renderListItems(routes: Array<Page>) {
  return (
    <List>
      {
        routes.map(route => (
          renderChildItem(route)
        ))
      }
    </List>
  )
}

function renderChildItem({ routes, title }: Page) {
 return (
  <AppDrawerItem routes={routes} title={title} />
 ) 
}

export default function AppDrawer(props: Props) {
  const classes = useStyles()

  return (
    <SwipeableDrawer
        onClose={props.onToggleDrawer}
        onOpen={props.onToggleDrawer}
        open={props.drawerOpen}
        classes={{
          paper: classes.paper
        }}
      >
        <div className={classes.toolbarIe11}>
          <div className={classes.toolbar}>
            <Link className={classes.title} href='/' variant="h6" color="inherit">
              Krowdy-UI
            </Link>
            <Typography
            // onClick={onClose}
            // href="https://material-ui.com/versions/"
              color="textSecondary"
              variant="caption"
            >v0.0.1</Typography>
          </div>
        </div>
        <Divider />
        {
          renderListItems(pages)
        }
        {/* <List>
          {
            pages.map(({label, routes = []}, key) =>(
              <ListItem disableGutters key={`path-${key}`} className={classes.itemLeaf}>
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
            ))
          }
        </List> */}
      </SwipeableDrawer>
  )
}