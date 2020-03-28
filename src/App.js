import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject:{title:'Web', sub:'World wide web'}
    }
  }
  render() {
    return (
      // component는 하나의 최상위 태그만을 포함해야한다
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        {/* <Subject></Subject> */}
        <TOC></TOC>
        <Content title='HTML' sub='HTML is HyperText Markup Language.'></Content>
      </div>
    );
  }
}

export default App;
