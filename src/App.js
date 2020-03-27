import React, { Component } from 'react';
import './App.css';

// class이름은 대문자로 시작해야함
class Subject extends Component {
  // 최신 JavaScript는 function을 생략 function render() -> render()
  render() {
    return(
      // 엄밀히 말하면 이건 JavaScript가 아니고 페이스북에서 개발한 jsx로서
      // jsx식으로 코드를 작성하면 create react app이 자동으로 jsx -> JavaScript로 컨버팅 해줌
      <header>
          <h1>WEB</h1>
          World wide web
      </header>
    );
  }
}

class Toc extends Component {
  render() {
    return(
      <nav>
          <ul>
              <li><a href="1.html">HTML</a></li>
              <li><a href="2.html">CSS</a></li>
              <li><a href="3.html">JavaScript</a></li>
          </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return(
      <article>
          <h2>HTML</h2>
          HTML is HyperText Markup Language.
      </article>
    );
  }
}

class App extends Component{
  render() {
    return (
      // component는 하나의 최상위 태그만을 포함해야한다
      <div className="App">
        <Subject></Subject>
        <Toc></Toc>
        <Content></Content>
      </div>
    );
  }
}

export default App;
