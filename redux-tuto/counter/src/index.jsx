import {createStore} from 'redux';
import React from 'react';
import Counter from './components/Counter';
import * as CounterActions from './actions/counter';

console.log(CounterActions);

function counter(state = 0, action = null) {
  switch (action.type) {
  case CounterActions.INCREMENT_COUNTER :
    return state + 1;
  case CounterActions.DECREMENT_COUNTER :
    return state - 1;
  }
  return state;
}

let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));


//This is a bad solution, the manage of state must be doit in a smart component
var connectActions = {
  decrement: () => {
    store.dispatch(CounterActions.decrement());
  },
  increment: () => {
    store.dispatch(CounterActions.increment());
  },
  incrementAsync: () => {
    store.dispatch(CounterActions.incrementAsync());
  },
  incrementIfOdd: () => {
    store.dispatch(CounterActions.incrementIfOdd());
  }
};


store.subscribe(() => {
  React.render(<Counter counter={store.getState()} {...connectActions}/>, document.getElementById('app'));
});

//Dispach something to trigger firs init
store.dispatch({type:'init'});
