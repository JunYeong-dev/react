import React, { Component } from 'react';

class TOC extends Component {
    // 불필요한 render함수의 호출을 막기 위해 사용하는 함수
    // 매개변수는 2개를 받을 수 있음, 각각 새로운 변한 props와 state
    shouldComponentUpdate(newProps, newState) {
      // newProps.data; this.props.data 각각 새로 변환된 props와 기존의 props
      // return값이 true면 render함수 호출, false면 render함수를 호출하지 않음
      if(this.props.data === newProps.data) {
        return false;
      } 
      return true;
    }
    render() {
      var lists = [];
      var data= this.props.data;
      var i = 0;
      while(i < data.length) {
        lists.push(
          <li key={data[i].id}>
            <a 
              href={"/content/"+data[i].id}
              // id 값을 넘겨주기 위해 속성을 추가
              data-id={data[i].id}
              onClick={function(e) {
                // target : 이벤트가 일어난 태그를 가져옴; 여기서는 a태그
                // dataset : a태그의 data-id를 보면 접두어가 data, 이럴 경우 target의 dataset에서 찾아와야 한다
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
              // 위 방법뿐만 아니라 bind함수에 매개변수로 넘겨 줄 수도 있다. -> bind(this, data[i].id)
              // 이럴 경우 function(e)에 매개변수로 들어가게 되는데 -> function(id, e) 여기서 id는 data[i].id를 가르킴
              // 만약 bind(this, data[i].id, 10) 일 경우 -> function(id, num, e) 여기서 num은 10을 가르킴
              // bind로 넘겨줄 경우 function의 가장 첫 번째 매개변수 부터 들어감
            >{data[i].title}</a>
          </li>);
        i +=  1;
      }
      return(
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
      );
    }
  }

  export default TOC;