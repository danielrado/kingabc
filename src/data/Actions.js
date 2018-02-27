'use strict';

import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

const Actions = {
  startGame() {
    Dispatcher.dispatch({
      type: ActionTypes.START_GAME,
    });
  },
};

export default Actions;