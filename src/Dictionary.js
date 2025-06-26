import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDirectionResponse(response) {
    setResults(response.data.meanings[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "821b2a703ac1t98f96395477546f6ebo";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDirectionResponse);

    let pexelsApiKey =
      "T6i84rpmtFARYcnOoKCvSSt8ClhmvApmm6UrDcRmzKjgHu1IJcVWLL0d";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    let headers = { Authorization: ` ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              className="inputInfo"
              autoocus
              defaultValue={props.defaultKeyword}
            />
            <input type="submit" value="Search" className="search-btn m-2 " />
          </form>
          <div className="hint">For explample: color, spring, cake...</div>

          <h2>
            <strong>{keyword}</strong>
          </h2>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
