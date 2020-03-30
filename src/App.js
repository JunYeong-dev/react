import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'World wide web'},
      Welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'Welcome') {
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      // component는 하나의 최상위 태그만을 포함해야한다
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode:'Welcome'});
          }.bind(this)}
        >
        </Subject>
        {/* <header>
            <h1><a href="/" onClick={function(e){
              // preventDefault() : 기본 적인 동작을 막는 것;
              // 여기서는 a태그의 동작을 막는데 a태그는 이동을 하면서 reload되는데 그것을 막아줌
              console.log(e.preventDefault());
              // 이렇게 하면 react는 state가 바뀌었다는것을 인식하지 못함
              // this.state.mode = 'Welcome';
              this.setState({
                mode:'Welcome'
              });
              // bind(this)를 하지 않으면 this, 즉 component를 인식하지 못함
            }.bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header> */}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} sub={_desc}></Content>
      </div>
    );
  }
}

export default App;
