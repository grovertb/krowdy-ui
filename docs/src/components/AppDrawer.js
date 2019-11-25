import React from 'react'
import { makeStyles } from '@krowdy-ui/styles'
import { 
  SwipeableDrawer,
  Collapse,
  Divider,
  Link,
  List,
  ListItem,
  Typography,
  Button,
  Hidden,
  Drawer
} from '@krowdy-ui/core'

import pages from '../routes/pages'
import { t } from './MarkDowns/utils'
import clsx from 'clsx'

const useStylesDrawer = makeStyles({
  itemContent: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemTitle: {
    width: '100%',
    letterSpacing: 0,
    textTransform: 'none',
    justifyContent: 'flex-start',
    paddingLeft: ({depth}) => depth
  },
  itemTitleLink: {
    width: '100%',
    fontWeight: 400,
    letterSpacing: 0,
    textTransform: 'none',
    justifyContent: 'flex-start',
    paddingLeft: ({depth}) => depth
  }
})

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
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
  title: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}))

function DrawerListItem({ page, depth }) {
  const classes = useStylesDrawer({depth: 8 * (3 + 2 * depth)})
  const [ openCollapse, setOpenCollapse ] = React.useState(false)
  const { routes, title, path } = page 

  const _handleToggleCollapse = () => {
    setOpenCollapse(!openCollapse)
  }

  if(routes && routes.length) {
    return (
      <ListItem disableGutters className={classes.itemContent}>
        <Button
          className={classes.itemTitle}
          onClick={routes && routes.length ? _handleToggleCollapse : undefined}>
          {title}
        </Button>
          <Collapse in={openCollapse} unmountOnExit>
            {
              renderDrawerList(routes, depth + 1)
            }
          </Collapse>
      </ListItem>
    )
  } else {
    return (
      <ListItem disableGutters className={classes.itemContent}>
        <Button href={path || '#'} className={classes.itemTitleLink} >
          {title}
        </Button>
      </ListItem>
    )
  }
}

const renderDrawerList = (routes, depth) => (
  <List>
    {
      routes.map((route, index) => <DrawerListItem key={`listItem-${index}`} page={route} depth={depth} />)
    }
  </List>
)


export default function AppDrawer(props) {
  const classes = useStyles()

  const drawer = (
    <React.Fragment>
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
        renderDrawerList(pages, 0)
      }
    </React.Fragment>
  )
  // return (
  //   <nav>
  //     <SwipeableDrawer
  //       onClose={props.onToggleDrawer}
  //       onOpen={props.onToggleDrawer}
  //       open={props.drawerOpen}
  //       classes={{
  //         paper: classes.paper
  //       }}
  //     >
  //       {drawer}
  //     </SwipeableDrawer>
  //   </nav>
  // )

  // const disablePermanent = false

  return (
    <nav 
      className={classes.drawer} 
      aria-label={t('mainNavigation')}>
      <Hidden 
        // lgUp={!disablePermanent} 
        implementation="js">
        <SwipeableDrawer
          classes={{
            paper: clsx(classes.paper, 'algolia-drawer'),
          }}
          // disableBackdropTransition={!iOS}
          variant="temporary"
          open={props.drawerOpen}
          onOpen={props.onToggleDrawer}
          onClose={props.onToggleDrawer}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </Hidden>
      {/* {disablePermanent ? null : (
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.paper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      )} */}
      <Hidden mdDown implementation="css">
        <Drawer
          classes={{
            paper: classes.paper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}