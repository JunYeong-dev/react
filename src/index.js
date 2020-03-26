import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// public/index.html의 id가 root인 태그 안에 넣어 주는 것을 의미
// <App /> : 위쪽의 import 되어있는 것을 뜻하며 ./App는 .js가 생략된 것
ReactDOM.render( <App />, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
