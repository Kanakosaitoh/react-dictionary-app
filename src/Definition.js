import React from "react";
import "./Definition.css";
export default function Definition(props) {
  console.log(props.definition);
  if (props.definition) {
    return <div className="Definition">{props.definition}</div>;
  } else {
    return null;
  }
}
