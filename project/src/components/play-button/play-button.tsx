import React from 'react';

function PlayButton(): JSX.Element {
  return (
    <React.Fragment>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </React.Fragment>
  );
}

export default PlayButton;