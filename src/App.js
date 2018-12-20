import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Images from "./components/Images";

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Images />
      </div>
    );
  }
}

export default App;
