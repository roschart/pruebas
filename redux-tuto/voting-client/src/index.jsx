import React from 'react';
import {Router, Route} from 'react-router';
import App from './components/App';
//import Voting from './components/Voting';
import Results from './components/Results';

const routes = (
  <Router>
    <Route component={App} path='/'/>
    <Route component={Results} path='results' />
  </Router>
);

React.render(routes,document.getElementById('app'));
