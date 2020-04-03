import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'Welcome',
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
  getReadContent(){
    var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
        }
        i += 1;
      }
  }

  getContent() {
    var _title, _desc, _article, _content = null;
    if(this.state.mode === 'Welcome') {
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
      _article = <ReadContent title={_title} sub={_desc}></ReadContent>;
    } else if(this.state.mode === 'read') {
      _content = this.getReadContent();
      _article = <ReadContent title={_content.title} sub={_content.desc}></ReadContent>;
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.max_content_id += 1;
        // 불변성 immutable
        // push의 경우 기존의 값이 바뀜; 기존 contents는 값이 데이터가 3개, 바뀐(push) 후 데이터 4개
        // 이 방법이 좋지 않은데 그 이유는 후에 성능 개선이 굉장히 어려워짐
        // TOC의 shouldComponentUpdate와 밀접한 관련이 있는데 
        // 현재 TOC의 shouldComponentUpdate에서는 원래의 데이터와 새로 변한 데이터을 비교해서
        // render의 호출을 결정하는데 push의 경우 원본 데이터를 변경하는 것이기 때문에 
        // 원본 데이터와 변한 데이터의 값이 항상 일치하게 되는 문제가 발생하게 된다

        // this.state.contents.push({
        //   id:this.max_content_id, title:_title, desc:_desc
        // });

        // this.setState({
        //   contents:this.state.contents
        // });
        
        // concat의 경우 원본 데이터는 변하지 않는다
        var _contents = this.state.contents.concat({
          id:this.max_content_id, title:_title, desc:_desc
        });

        // 이런 방법도 있음; 배열을 복제하는 것 -> 복제이기 때문에 내용은 같지만 === 으로 비교했을 때는 false가 나오게 된다
        // var _contents = Array.from(this.state.contents);
        // _contents.push({id:this.max_content_id, title:_title, desc:_desc});

        // 객체를 복제하는 방법
        // var a = {name:'test'}
        // var b = Object.assign({}, a);

        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        });
      }.bind(this)}></CreateContent>;
    } else if(this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc) {
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while(i < _contents.length) {
          if(_contents[i].id === _id) {
            _contents[i] = {id:_id, title:_title, desc:_desc}
            break;
          }
          i += 1;
        }
        this.setState({
          contents:_contents,
          mode:'read'
        });
      }.bind(this)}></UpdateContent>;
    }

    return _article;
  }

  render() {
    
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
          if(_mode === 'delete') {
            if(window.confirm('really?')) {
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < _contents.length) {
                if(_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i, 1);
                  break;
                }
                i += 1;
              }
              this.setState({
                mode:'Welcome',
                contents:_contents
              });
              alert('deleted!');
            }
          } else {
            this.setState({
              mode:_mode
            });
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
