import React from "react";

export default function Example(props) {
  console.log(props.example);
  if (props.example) {
    return (
      <div className="Example">
        <strong>Examples:</strong>
        <li>{props.example}</li>
      </div>
    );
  } else {
    return null;
  }
}
