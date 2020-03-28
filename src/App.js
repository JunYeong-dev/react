import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import './App.css';

class App extends Component{
  render() {
    return (
      // component는 하나의 최상위 태그만을 포함해야한다
      <div className="App">
        <Subject title="Web" sub="World wide web"></Subject>
        {/* <Subject></Subject> */}
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
