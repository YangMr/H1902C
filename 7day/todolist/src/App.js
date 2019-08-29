import React from 'react';
//引入创建的组件
import Header from "./component/Header"
import List from "./component/List"
import Footer from "./component/Footer"

class App extends React.Component{

  constructor(props){
    super(props)

    //定义状态
    this.state = {
      todoList : [
        {title : "今天我要学习react", check : false},
        {title : "今天有两个事孤单", check : false},
        {title : "今天我要学习联系手册", check : false},
        {title : "今天我要学习javascript", check : false}
      ]
    }

    this.del = this.del.bind(this)
    this.add = this.add.bind(this)
  }

  //定义删除方法
  del(index){
    let arr = this.state.todoList;
    arr.splice(index,1);
    this.setState({
      todoList : arr
    })
  }

  //添加数据方法
  add(data){
    let arr = this.state.todoList;
    arr.push(data);

    this.setState({
      todoList : arr
    })
  }

  render(){
    return (
        <div className="todo-container">
          <div className="todo-wrap">
            <Header  add={this.add}></Header>

            <List del={this.del} todos={this.state.todoList}></List>

            <Footer></Footer>
          </div>
        </div>
    );
  }

}

export default App;
