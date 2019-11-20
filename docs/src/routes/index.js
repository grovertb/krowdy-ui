import React from 'react'
import loadable from '@loadable/component'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import pages from './pages'
import Main from '../containers/Main'
import Home from '../containers/Home'

const RouteComponent = loadable(props => import(`../containers${props.path}`))

function getPaths(routes) {
  return [].concat(...routes.map(page => {
    return page.routes ? getPaths(page.routes) : page.path
  })).filter(Boolean)
}

export default () => {
  return (
    <Router>
      <Main>
        <Switch>
          {
            getPaths(pages).map((path, index) =>
              <Route key={`path-${index}`} component={() => <RouteComponent path={path} />} path={path} />
            )
          }
          <Route component={Home} path='/' />
        </Switch>
      </Main>
    </Router>
  )
}