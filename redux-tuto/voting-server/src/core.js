import {
  List, Map
}
from 'immutable';

export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

export function next(state) {
  const entries = state.get('entries').concat(getWin(state.get('vote')));
  return state.merge({
    vote: Map({
      pair: entries.take(2)
    }),
    entries: entries.skip(2)
  });
}

export function vote(state, movie) {
  return state.updateIn(['vote', 'tally', movie], 0, (vote) => vote + 1);
}


function getWin(vote) {
  if (!vote) {
    return [];
  }
  const [a, b] = vote.get('pair');
  const voteA = vote.getIn(['tally', a],0);
  const voteB = vote.getIn(['tally', b],0);
  return voteA > voteB ? [a] : voteB > voteA ? [b] : [a, b];
}