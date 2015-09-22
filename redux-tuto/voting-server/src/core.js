import {
  List, Map
}
from 'immutable';
export function defaultInitState(){return Map();}

export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

export function next(state) {
  const entries = state.get('entries').concat(getWin(state.get('vote')));
  if (entries.count() === 1) {
    return state.remove('vote')
      .remove('entries')
      .set('winner', entries.first());
  }
  return state.merge({
    vote: Map({
      pair: entries.take(2)
    }),
    entries: entries.skip(2)
  });
}

export function vote(vote, entry) {
  return vote.updateIn(['tally', entry], 0, tally => tally + 1);
}


function getWin(vote) {
  if (!vote) {
    return [];
  }
  const [a, b] = vote.get('pair');
  const voteA = vote.getIn(['tally', a], 0);
  const voteB = vote.getIn(['tally', b], 0);
  return voteA > voteB ? [a] : voteB > voteA ? [b] : [a, b];
}