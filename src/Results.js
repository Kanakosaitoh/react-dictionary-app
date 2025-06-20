import React from "react";
import Synonyms from "./Synonyms";
import Definition from "./Definition";
import Example from "./Example";
import Phonetic from "./Phonetic";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <p>
          <Phonetic phonetic={props.results.phonetic} />
          <em> {props.results.partOfSpeech}</em>
          <Definition definition={props.results.definition} />
          <Example example={props.results.example} />
          <Synonyms synonyms={props.results.synonyms} />
        </p>
      </div>
    );
  } else {
    return null;
  }
}
