import React from 'react'
import loadable from '@loadable/component'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import pages, { apiRoutes } from './pages'

import Main from '../containers/Main'
import Home from '../containers/Home'

const PageComponent = loadable(props => import(`../pages${props.path}`))

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
              <Route key={`page-${index}`} component={() => <PageComponent path={path} />} path={path} />
            )
          }
          {
            apiRoutes.map((path, index) => {
              return (
                <Route 
                key={`api-${index}`} 
                component={() => <PageComponent path={path} />} 
                path={path} />
              )
            })
          }
          <Route component={Home} path='/' />
        </Switch>
      </Main>
    </Router>
  )
}