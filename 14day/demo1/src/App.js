import React from 'react';

//引入创建的三个组件
import TodoHeader from "./components/Header"
import TodoList from "./components/List"
import TodoFooter from "./components/Footer"

class App extends React.Component{
  render() {
    return (
        <div className="App">
          <div className="todo-header">
            <TodoHeader></TodoHeader>
          </div>
          <div className="todo-list">
            <TodoList></TodoList>
          </div>
          <div className="todo-footer">
            <TodoFooter></TodoFooter>
          </div>
        </div>
    )
  }
}

export default App;
