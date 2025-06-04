import React from "react";
import Dictionary from "./Dictionary";
import logo from "./logo-books.png";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <img className="Emoji-books img-fluid mt-5" src={logo} alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}
