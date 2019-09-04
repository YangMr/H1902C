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

      this.setData = this.setData.bind(this)
  }

  componentDidMount() {
    // this.setData()
  }

    setData(a){

        if(localStorage.getItem("searchHistory")){
            let localData = JSON.parse(localStorage.getItem("searchHistory"));
            localData.push(a);
            localStorage.setItem("searchHistory",JSON.stringify(localData))
            this.setState({
                historyData : JSON.parse(localData)
            })
        }else{
            let data = [];
            data.push(a)
            //2.重新存储数据
            localStorage.setItem("searchHistory",JSON.stringify(data))
        }

    }


    render(){
      return (
          <div className="App">
              <Header setData = {this.setData}></Header>
              <Hot></Hot>
              <History historyData={this.state.historyData}></History>
          </div>
      )
  }
}

export default App;
