import React, { Component } from "react";

// class이름은 대문자로 시작해야함
class Subject extends Component {
    // 최신 JavaScript는 function을 생략 function render() -> render()
    render() {
      return(
        // 엄밀히 말하면 이건(태그를 바로 쓰는 것) JavaScript가 아니고 페이스북에서 개발한 jsx로서
        // jsx식으로 코드를 작성하면 create react app이 자동으로 jsx -> JavaScript로 컨버팅 해줌
        <header>
            <h1>{this.props.title}</h1>
            {this.props.sub}
        </header>
        // <header>
        //     <h1>WEB</h1>
        //     World wide web
        // </header>
      );
    }
  }
  
  export default Subject;