import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList.js";
import SearchBar from "../SearchBar/SearchBar.js";
import { render } from "@testing-library/react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        {< BusinessList />}
        {< SearchBar/>}
      </div>
    );
  }
}

export default App;
