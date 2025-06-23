import React from "react";
import "./Example.css";
export default function Example(props) {
  console.log(props.example);
  if (props.example) {
    return (
      <div className="Example">
        <section>
          <strong>Examples:</strong>
          <ul>
            <li>{props.example}</li>
          </ul>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
