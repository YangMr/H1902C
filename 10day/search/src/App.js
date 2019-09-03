import React from 'react';

//引入自定义的组件
import Header from "./component/Header"
import Hot from "./component/Hot"
import History from "./component/History"

class App extends React.Component{

  constructor(props){
      super(props)

      this.state = {
          historyData : []
      }
  }

  componentDidMount() {
     let localData = localStorage.getItem("searchHistory");
     console.log(JSON.parse(localData))

      this.setState({
          historyData : JSON.parse(localData)
      })
  }

    render(){
      return (
          <div className="App">
              <Header></Header>
              <Hot></Hot>
              <History historyData={this.state.historyData}></History>
          </div>
      )
  }
}

export default App;
