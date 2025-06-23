import React from "react";
import Synonyms from "./Synonyms";
import Definition from "./Definition";
import Example from "./Example";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <p>
          <section>
            <Phonetic phonetic={props.results.phonetic} />
            <em> {props.results.partOfSpeech}</em>
          </section>
          <section>
            <Definition definition={props.results.definition} />
          </section>
          <section>
            <Example example={props.results.example} />
          </section>
          <section>
            <Synonyms synonyms={props.results.synonyms} />
          </section>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
