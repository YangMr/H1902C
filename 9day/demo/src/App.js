import React from 'react';
import List from "./component/List"
import Footer from "./component/Footer"


class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      //定义渲染的数据
      listArr : [
        {id: 1, content : "我想好好学习1", finshed : false},
        {id: 2, content : "我想好好学习2", finshed : false},
        {id: 3, content : "我想好好学习3", finshed : false},
        {id: 4, content : "我想好好学习4", finshed : false},
        {id: 5, content : "我想好好学习5", finshed : false}
      ],
      //定义选中的个数
      finshedCount : 0
    }


    //改变this的指向
    this.changeFinshed = this.changeFinshed.bind(this)
    this.changeSelectedAllFinshed = this.changeSelectedAllFinshed.bind(this)
    this.delChange = this.delChange.bind(this)
  }

  //定义改变finshed选中的方法
  changeFinshed(flag,id){
    //将this.state里面的listArr的数据交给变量listArr来保存
    let listArr = this.state.listArr;
    let count = 0;
    //遍历listArr
    listArr.forEach((item,index)=>{
      if(index == id){
        item.finshed = flag;
      }

      if(item.finshed){
          count = count + 1;
      }
    })


    this.setState({
      // listArr : listArr
      listArr,
      finshedCount : count
    })
  }


  //定义一个方法，改变所有finshed的所有值
  changeSelectedAllFinshed(data){

    let arr = this.state.listArr;
    let count = 0;
    arr.forEach((item,index)=>{
      item.finshed = data;

    })

    arr.forEach((item,index)=>{
      if(item.finshed){
        count = count + 1;
      }
    })

    this.setState({
      listArr : arr,
      finshedCount : count
    })
  }


  //定义一个删除选中任务方法
  delChange(){
    //创建一个新的数据，用来保存没有选中的任务
    let newArr = [];
    let count = 0;
    //获取存储在state里面的数据
    let arr = this.state.listArr;

    //遍历数据
    arr.forEach((item,index)=>{
      if(item.finshed === false){
        newArr.push(item);
      }
    })



    this.setState({
      listArr : newArr,
      finshedCount : 0
    })


  }


  render(){
    return (
        <div className="App">
          <List changeFinshed={this.changeFinshed} listArr = {this.state.listArr}></List>
          <Footer delChange={this.delChange} changeSelectedAllFinshed={this.changeSelectedAllFinshed} totalCount={this.state.listArr.length} finshedCount = {this.state.finshedCount}></Footer>
        </div>
    );
  }
}

export default App;
