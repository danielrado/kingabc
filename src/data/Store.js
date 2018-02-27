'use strict';

import Counter from './Counter';
import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Puzzle from './Puzzle';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

class Store extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.START_GAME:

        return state.set(id, new Puzzle({
          items: ['A', 'B', 'C'],
          correctItem: 'A',
          solved: false,
        }));

      default:
        return state;
    }
  }

}

export default new Store();