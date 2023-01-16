import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import './assets/styles/styles.scss';
import stylesMainWrapper from './assets/styles/mainWrapper.scss';

const App = () => (
  <Router>
    <div className={stylesMainWrapper.mainWrapper}>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default hot(module)(App);
