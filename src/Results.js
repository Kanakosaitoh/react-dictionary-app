import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.antonyms[0]}</h2>
        <h2>
          <em>{props.results.partOfSpeech}</em>
        </h2>
        <h2>
          Meanings:
          <p> {props.results.definition}</p>
        </h2>
      </div>
    );
  } else {
    return null;
  }
}
