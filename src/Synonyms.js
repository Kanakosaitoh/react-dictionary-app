import React from "react";
import "./Synonyms.css";
export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <section>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
