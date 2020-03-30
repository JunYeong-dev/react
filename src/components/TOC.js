import React, { Component } from 'react';

class TOC extends Component {
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