'use strict';

import Immutable from 'immutable';

const Puzzle = Immutable.Record({
    items: [],
    correctItem: '',
    solved: false,
});

export default Puzzle;