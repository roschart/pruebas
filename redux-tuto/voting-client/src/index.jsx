import React from 'react';
import Voting from './components/Voting';
import {List} from 'immutable';
const pair = List(['Trainspotting', '28 Days Later']);

React.render(
  <Voting pair={pair} hasVotedX='Trainspotting'  />,
  document.getElementById('app')
);