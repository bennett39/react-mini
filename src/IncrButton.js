import React from 'react';

function IncrButton(props) {
  return (
    <button
      key={props.incr}
      onClick={() => props.onClick()}
    >
    {props.incr}
    </button>
  );
}

export default IncrButton;

