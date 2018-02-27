'use strict';

import React from 'react';

function AppView(props) {
  return (
    <div>
      <StartButton {...props} />
    </div>
  );
}

function StartButton(props) {
  return (
    <button onClick={props.onStartGame}>
      START
    </button>
  );
}

export default AppView;