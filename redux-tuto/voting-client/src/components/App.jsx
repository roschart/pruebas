import React from 'react';
import {List, Map} from 'immutable';
import Voting from './Voting';
import {Link } from 'react-router';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

export default React.createClass({
  render: function() {
    return (
      <div>
        <Voting pair={pair} tally={tally}/>
        <Link to='results'>results</Link>
      </div>
    );
  }
});