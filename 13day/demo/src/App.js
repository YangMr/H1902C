import React from 'react';

import Header from "./components/Header"
import Footer from "./components/Footer"

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      flag :false
    }
  }


  render(){
    return (
        <div className="App">

          <input type="text"/>
          
          <button onClick={()=> this.toggle()}>toggle</button>
          <hr/>

          <Header flag={this.state.flag}></Header>
          <Footer flag={this.state.flag}></Footer>
        </div>
    );
  }

  toggle(){
    let bool = this.state.flag;  // false  true

    this.setState({
      flag : !bool
    })
  }
}

export default App;
