import React, { useState } from "react";

export default function Dictionary() {
  const [keyWord, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
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
    </div>
  );
}
