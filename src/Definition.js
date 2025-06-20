import React from "react";

export default function Definition(props) {
  console.log(props.definition);
  if (props.definition) {
    return <div className="Definition">{props.definition}</div>;
  } else {
    return null;
  }
}
