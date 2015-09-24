import React from 'react';
import {List, Map} from 'immutable';
import {VotingContainer} from './Voting';
import {Link } from 'react-router';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

export default React.createClass({
  render() {
    return (
      <div>
        <VotingContainer pair={pair} tally={tally} {...this.props}/>
        <Link to='results'>results</Link>
      </div>
    );
  }
});