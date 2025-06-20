import React from "react";
import Synonyms from "./Synonyms";
import Definition from "./Definition";
import Example from "./Example";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <p>
          <em> {props.results.partOfSpeech}</em>
          <br />
          <strong>Definition:</strong>
          <br />
          <Definition definition={props.results.definition} />
          <br />
          <strong>Examples:</strong>
          <Example example={props.results.example} />
          <br />
          <strong>Synonyms:</strong>
          <Synonyms synonyms={props.results.synonyms} />
        </p>
      </div>
    );
  } else {
    return null;
  }
}
