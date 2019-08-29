//引入react
import React from 'react';
//引入react-dom
import ReactDOM from 'react-dom';
//引入app组件
import App from './App';
//引入index.css
import "./index.css"

import * as serviceWorker from './serviceWorker';

//渲染app组件
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
