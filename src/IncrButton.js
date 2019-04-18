import React from 'react';

function IncrButton(props) {
  return (
    <button onClick={() => props.onClick()}>
    {props.incr}
    </button>
  );
}

export default IncrButton;

