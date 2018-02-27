'use strict';

import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import Actions from '../data/Actions';
import Store from '../data/Store';

function getStores() {
    return [
        Store
    ];
}

function getState() {
  return {
    puzzles: Store.getState(),

    onStart: Actions.startGame
  };
}

export default Container.createFunctional(AppView, getStores, getState);