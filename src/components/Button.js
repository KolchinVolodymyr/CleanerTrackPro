import React from 'react';

export const Button = props => {

  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className="waves-effect waves-light btn"
    >
      {props.children}
    </button>
  )
}

