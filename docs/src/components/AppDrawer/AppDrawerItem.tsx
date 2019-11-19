
import React from 'react'
import { ListItem, Button/*, Collapse */ } from '@krowdy-ui/core'

import { Page } from 'docs/src/routes/pages'

export default function AppDrawerItem(props: Page) {
  const {
    title,
    routes
  } = props

  console.log('Grover: AppDrawerItem -> routes', routes)

  return (
    <ListItem 
      // key={`path-${key}`} 
      // className={classes.itemLeaf}
      disableGutters >
      <Button>{title}</Button>
      {/* <Collapse in={true} unmountOnExit>
        <List disablePadding>
          {
            routes.map((route, keyRoute)=> (
              <ListItem disableGutters className={classes.itemLeaf} button key={`route-${key}-${keyRoute}`}>
                <Button>{route.label}</Button>
              </ListItem>
            ))
          }
        </List>
      </Collapse> */}
    </ListItem>
  )
}