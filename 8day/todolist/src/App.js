import React from 'react';

import Header from "./component/Header"
import List from "./component/List"
import Footer from "./component/Footer"

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            listArr: [
                {title: "我今天没有睡觉", check: false},
                {title: "我做完通宵去了", check: false},
                {title: "我现在一点也不困", check: false}
            ],
            count : 0,
            cCheck : false
        }

        this.changeCheck = this.changeCheck.bind(this);
        this.oneCheck = this.oneCheck.bind(this)
        this.changeC = this.changeC.bind(this)
        this.del = this.del.bind(this)

    }

    del(){
        let arr = this.state.listArr;
        let tarr = [];
        arr.forEach((item,index)=>{

            if(!item.check){
                tarr.push(item)
            }
        })

        this.setState({
            listArr : tarr
        })
    }

    changeC(data){
        this.setState({
            cCheck : data
        })
    }

    //修改单个check方法
    oneCheck(data,aindex){

        let arr = this.state.listArr;

        arr.forEach((item,index)=>{
          if(aindex === index){
              item.check = data;

              if(data){
                  this.setState({
                      count : this.state.count + 1,

                  })
              }else{
                  this.setState({
                      count : this.state.count - 1,

                  })
              }
          }

          console.log(item.check)

          if(item.check){
              this.setState({
                  cCheck : true
              })
          }else{
              this.setState({
                  cCheck : false
              })
          }
        });

        this.setState({
            listArr : arr
        })
    }


    //定义一个修改全部check的放啊
    changeCheck(data){
        let arr = this.state.listArr;
        let num = this.state.count;
        arr.forEach((item,index)=>{
            item.check = data;
            if(data){
                num+=1;
            }else{
                num-=1;
            }
        })



        this.setState({
            listArr : arr,
            count : num
        })
    }

    render() {
        return (
            <div className="todo-container">

                <div className="todo-wrap">
                    <Header></Header>

                    <List oneCheck={this.oneCheck} listArr = {this.state.listArr}></List>

                    <Footer del={this.del} arrCount={this.state.listArr.length} changeC={this.changeC} cCheck={this.state.cCheck} count={this.state.count} changeCheck={this.changeCheck}></Footer>
                </div>
            </div>
        )
    }
}

export default App
