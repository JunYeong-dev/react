import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'create',
      selected_content_id:2,
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
    var _title, _desc, _article = null;
    if(this.state.mode === 'Welcome') {
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
      _article = <ReadContent title={_title} sub={_desc}></ReadContent>;
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      }
      _article = <ReadContent title={_title} sub={_desc}></ReadContent>;
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.max_content_id += 1;
        // push의 경우 기존의 값이 바뀜; 기존 contents는 값이 데이터가 3개, 바뀐(push) 후 데이터 4개
        // 이 방법이 좋지 않은데 그 이유는 후에 성능 개선이 굉장히 어려워짐
        // this.state.contents.push({
        //   id:this.max_content_id, title:_title, desc:_desc
        // });

        // this.setState({
        //   contents:this.state.contents
        // });
        
        var _contents = this.state.contents.concat({
          id:this.max_content_id, title:_title, desc:_desc
        });

        this.setState({
          contents:_contents
        });
      }.bind(this)}></CreateContent>;
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
        <TOC 
          onChangePage={function(id) {
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
        >
        </TOC>
        <Control onChangeMode={function(_mode) {
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
