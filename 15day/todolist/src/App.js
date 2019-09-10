import React from 'react';

import Todo from "./components/Todo"

import {Provider} from "react-redux"

import store from "./store/index"

class App extends React.Component{
    render(){
        return (
            <div className="App">
                {/*provider里面的组件能够接收store里面的数据*/}
                <Provider store ={store} >
                   <Todo></ Todo>
                </Provider>

            </div>
        )
    }
}

export default App;
