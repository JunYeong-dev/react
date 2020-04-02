import React, { Component } from 'react';

class UpdateContent extends Component {
    // props를 state화 시켜줌
    // 왜냐하면 props는 readonly이기 때문에
    // state화만 시켜준다고 수정이 되는 것은 아니기 때문에
    // setState로 값을 변경 시켜줘야함
    constructor(props) {
      super(props);
      this.state = {
        id:this.props.data.id,
        title:this.props.data.title,
        desc:this.props.data.desc
      }
      // bind
      this.inputFromHandler = this.inputFromHandler.bind(this);
    }
    inputFromHandler(e) {
      // [e.target.name] : targer의 name값을 가져옴
      this.setState({[e.target.name]:e.target.value});
    }
    render() {
      return(
        <article>
            <h2>Update</h2>
            <form action="/create_process" method="post"
              onSubmit={function(e) {
                e.preventDefault();
                this.props.onSubmit(
                  this.state.id,
                  this.state.title,
                  this.state.desc
                );
              }.bind(this)}
            >
              <input type="hidden" name="id" value={this.state.id}></input>
              <p>
                <input 
                  type="text" 
                  name="title" 
                  placeholder="title" 
                  value={this.state.title}
                  // 계속 bind하는 것은 비효율 적이므로 constructor에서 일괄적으로 bind해줌
                  onChange={this.inputFromHandler}
                ></input>
              </p>
              <p>
                <textarea 
                  name="desc"
                  placeholder="description"
                  value={this.state.desc}
                  onChange={this.inputFromHandler}
                ></textarea>
              </p>
              <p>
                <input type="submit"></input>
              </p>
            </form>
        </article>
      );
    }
  }

  export default UpdateContent;