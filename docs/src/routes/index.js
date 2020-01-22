import React from 'react'
import loadable from '@loadable/component'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import pages, { apiRoutes } from './pages.tsx'
import Main from '../containers/Main'
import Home from '../containers/Home'

const PageComponent = loadable(props => import(`../pages${props.path}`))

function getPaths(routes) {
  return [].concat(...routes.map(page => page.routes ? getPaths(page.routes) : page.path)).filter(Boolean)
}

export default () => (
  <Router>
    <Main>
      <Switch>
        {
          getPaths(pages).map((path, index) =>
            <Route
              component={() => <PageComponent path={path} />}
              key={`page-${index}`}
              path={path} />
          )
        }
        {
          apiRoutes.map((path, index) => (
            <Route
              component={() => <PageComponent path={path} />}
              key={`api-${index}`}
              path={path} />
          ))
        }
        <Route component={Home} path='/' />
      </Switch>
    </Main>
  </Router>
)
