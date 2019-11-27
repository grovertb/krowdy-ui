import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import * as serviceWorker from './serviceWorker';
import App from './App';

const render = Component => {
  ReactDOM.render(
    <AppContainer key={Math.random()}>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// Webpack Hot Module Replacement API
if(module.hot)
  module.hot.accept('./App', () => {
    render(require('./App').default)
  })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
