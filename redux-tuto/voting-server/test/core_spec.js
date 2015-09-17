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
    it('puts winner of current vote back to entries', () => {
      const state = fromJS({
        vote: {
          pair: ['Trainspotting', '28 Days Later'],
          tally: {
            'Trainspotting': 4,
            '28 Days Later': 2
          }
        },
        entries: ['Sunshine', 'Millions', '127 Hours']
      });
      const nextState = next(state);
      expect(nextState).to.equal(fromJS({
        vote: {
          pair: ['Sunshine', 'Millions']
        },
        entries: ['127 Hours', 'Trainspotting']
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
      const nextState = vote(state, 'Trainspotting');
      expect(nextState).to.equal(fromJS({
        vote: {
          pair: ['Trainspotting', '28 Days Later'],
          tally: {
            'Trainspotting': 1
          }
        }
      }));
    });
    it('add vote to existing tally', () => {
      const state = fromJS({
        vote: {
          pair: ['Trainspotting', '28 Days Later'],
          tally: {
            'Trainspotting': 4,
            '28 Days Later': 2
          }
        }
      });
      const nextState = vote(state, 'Trainspotting');
      expect(nextState).to.equal(fromJS({
        vote: {
          pair: ['Trainspotting', '28 Days Later'],
          tally: {
            'Trainspotting': 5,
            '28 Days Later': 2
          }
        }
      }));
    });
  });
});