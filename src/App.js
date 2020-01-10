import React from "react";
import SingleCell from "./components/SingleCell";
import "./App.css";

function App() {
  return (
    <div className="App">
      <table id="main-grid">
        <tr>
          <SingleCell />
        </tr>
      </table>
    </div>
  );
}

export default App;
