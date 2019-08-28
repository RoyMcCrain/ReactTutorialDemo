import React from "react";

export default function(props) {
  return (
    <button className="square-button" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
