import React from 'react';
import {Router, Route} from 'react-router';
import {Provider} from 'react-redux';
import App from './components/App';
import {createStore} from 'redux';
import reducer from './reducer';
import Results from './components/Results';

import {VotingContainer} from './components/Voting';



const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
});
const routes = (
  <Router>
    <Route component={App} path='/'/>
    <Route component={Results} path='results' />
  </Router>
);



React.render(<Provider store={store}>{()=><VotingContainer />}</Provider>,document.getElementById('app'));
