import {expect} from 'chai';
import {List} from 'immutable';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });

	describe('A list',()=>{
			function addMovie(list,movie){
				return list.push(movie);
			}	
			it('add a movie to list',()=>{
				let state = List.of('Hello','World');
				let newState=addMovie('Cruel');
				expect(state).to.equal(List.of('Hello','World'));
				expect(newState).to.equal(List.of('Hello','World','cruel'));
				})
			});

});
