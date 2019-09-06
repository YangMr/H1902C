import React from 'react';
import axios from "axios"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
// import Container from "./components/Container"

import Search from "./components/Search"

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count : 0,
      nav : ["商品介绍","如何购买","售后服务"],
      hots : [],
      auto : []
    }

    this.get = this.get.bind(this)
  }
  //
  // tab(e,num){
  //   this.setState({
  //     count : num
  //   })
  // }

  render(){
    return (
        <div className="App">


            <Search auto={this.state.auto} get={this.get} hots={this.state.hots}></Search>


          {/*<ul>*/}
          {/*  {*/}
          {/*    this.state.nav.map((item,index)=>*/}
          {/*      <li onClick={(e)=>this.tab(e,index)} className={this.state.count === index ? "active" : ""} key={index}>{item}</li>*/}
          {/*    )*/}
          {/*  }*/}
          {/*  /!*<li onClick={(e)=> this.tab(e,0)} className={this.state.count === 0 ? "active" : ""}>商品介绍</li>*!/*/}
          {/*  /!*<li onClick={(e)=> this.tab(e,1)} className={this.state.count === 1 ? "active" : ""}>如何购买</li>*!/*/}
          {/*  /!*<li onClick={(e)=> this.tab(e,2)} className={this.state.count === 2 ? "active" : ""}>售后服务</li>*!/*/}
          {/*</ul>*/}

          {/*<Header count = {this.state.count}></Header>*/}
          {/*<Container count = {this.state.count}></Container>*/}
          {/*<Footer count = {this.state.count}></Footer>*/}
        </div>
    );
  }

  componentDidMount() {
      //获取搜索热词
      axios.get("http://47.94.231.184/book/search-hotwords").then((response)=>{

          this.state.hots = response.data.searchHotWords;
          this.state.hots.length = 15;

          this.setState({
              hots : this.state.hots
          })
      }).catch((error)=>{
          console.log(error)
      })
  }

  get(data){
      axios.get("http://47.94.231.184/book/auto-complete",{
          params : {
              query : data
          }
      }).then((response)=>{
          console.log(response.data.keywords)

          this.setState({
              auto : response.data.keywords
          })
      }).catch((error)=>{
          console.log(error)
      })
  }
}

export default App;
