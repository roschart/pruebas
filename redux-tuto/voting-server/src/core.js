import {
  List, Map
}
from 'immutable';

export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

export function next(state) {
  return state.merge({
    vote: Map({
      pair: toVote(state)
    }),
    entries: restEntries(state)
  });
}

export function vote(state, movie) {
  return state.updateIn(['vote', 'tally', movie], 0 ,(vote)=>vote+1);
}

function toVote(state) {
  return state.get('entries').take(2);
}

function restEntries(state) {
  return state.get('entries').skip(2);
}