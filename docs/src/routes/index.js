import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Main from '../containers/Main'
import Home from '../containers/Home'

export default () => {
  return (
    <Router>
      <Main>
        <Switch>
          <Route component={Home} path='/' />
        </Switch>
      </Main>
    </Router>
  )
}