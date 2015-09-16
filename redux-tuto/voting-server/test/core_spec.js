import {
  List, Map, fromJS
}
from 'immutable';
import {
  expect
}
from 'chai';
import {
  setEntries, next, vote
}
from '../src/core';
describe('Application logic', () => {
  describe('setEntries', () => {
    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Trainspotting', '28 Days Later');
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    });
    it('converts to immutable', () => {
      const initState = Map();
      const entries = ['Trainspotting', '28 Days Later'];
      const nextState = setEntries(initState, entries);
      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    });
  });
  describe('next', () => {
    it('takes the next two entries under vote', () => {
      const state = fromJS({
        entries: ['Trainspotting', '28 Days Later', 'Sunshine']
      });
      const nextState = next(state);
      expect(nextState).to.equal(fromJS({
        vote: {
          pair: ['Trainspotting', '28 Days Later']
        },
        entries: ['Sunshine']
      }));
    });
  });
  describe('vote', () => {
    it('creates a tally for the voted entry', () => {
      const state = fromJS({
        vote: {
          pair: ['Trainspotting', '28 Days Later']
        }
      });
      const nextState=vote(state,'Trainspotting');
      console.log(nextState.toJSON());
      expect(nextState).to.equal(fromJS({
        vote: {
          pair: ['Trainspotting', '28 Days Later'],
          tally: {'Trainspotting':1}
        }
      }));
    });
  });
});