import React from 'react';
import Todo from "./components/Todo"
import ListName from "./components/List"

class App extends React.Component{
  render() {
    return (
        <div className="App">
          <div className="header">
            <Todo></Todo>
          </div>
          <div className="list">
            <ListName></ListName>
          </div>
          <div className="footer"></div>
        </div>
    )
  }
}

export default App;
