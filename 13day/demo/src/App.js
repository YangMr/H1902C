import React from 'react';

import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/Container"


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count : 0,
      nav : ["商品介绍","如何购买","售后服务"]
    }
  }

  tab(e,num){
    this.setState({
      count : num
    })
  }

  render(){
    return (
        <div className="App">

          <ul>
            {
              this.state.nav.map((item,index)=>
                <li onClick={(e)=>this.tab(e,index)} className={this.state.count === index ? "active" : ""} key={index}>{item}</li>
              )
            }
            {/*<li onClick={(e)=> this.tab(e,0)} className={this.state.count === 0 ? "active" : ""}>商品介绍</li>*/}
            {/*<li onClick={(e)=> this.tab(e,1)} className={this.state.count === 1 ? "active" : ""}>如何购买</li>*/}
            {/*<li onClick={(e)=> this.tab(e,2)} className={this.state.count === 2 ? "active" : ""}>售后服务</li>*/}
          </ul>

          <Header count = {this.state.count}></Header>
          <Container count = {this.state.count}></Container>
          <Footer count = {this.state.count}></Footer>
        </div>
    );
  }

}

export default App;
