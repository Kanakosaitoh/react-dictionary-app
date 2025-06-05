import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data.meanings[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "821b2a703ac1t98f96395477546f6ebo";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function changeKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={changeKeyword} />
        <input type="submit" value="Search" className="search-btn m-2 " />
      </form>
      <Results results={results} />
    </div>
  );
}
