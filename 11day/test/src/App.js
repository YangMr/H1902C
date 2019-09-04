import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import List from "./component/List"
import Demo from "./component/Demo";
class App extends React.Component{
  constructor(props){
      super(props)


  }
  render(){
    return (
        <div className="App">


          <Router>
              <Route path="/list/:id" component={List}/>
              <Route path="/"  exact component={Demo} />
          </Router>
        </div>
    )
  }


}

export default App;
