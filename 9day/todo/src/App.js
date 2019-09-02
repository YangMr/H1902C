//引入react
import React from 'react';

//引入自定义的组件
import Header from "./component/Header"
import List from "./component/List"
import Footer from "./component/Footer"



//引入css
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import "./todo.css"

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            listArr : []
        }

        this.get = this.get.bind(this)
    }

    componentDidMount() {
        if(localStorage.getItem("listArr")){
            let data  = eval(localStorage.getItem("listArr"));
            this.setState({
                listArr : data
            })
        }
    }

    get(){
        if(localStorage.getItem("listArr")){
            let data  = eval(localStorage.getItem("listArr"));
            this.setState({
                listArr : data
            })
        }
    }


    render (){
      return (
          <div className="todo">
              <div className="todo-wrap">
                  <Header get={this.get}></Header>
                  <List get={this.get} listArr = {this.state.listArr}></List>
                  <Footer></Footer>
              </div>
          </div>
      )
  }
}

export default App;
