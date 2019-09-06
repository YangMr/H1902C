import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import List from "./components/List"
import Hot from "./components/Hot"
import Rank from "./components/Rank";
import Button from "./components/Button"
import Login from "./components/Login"
class App extends React.Component{

  constructor(props) {
    super(props);
  }



  render(){
    return (
        <Router>
          <div className="App">
            <ul>
              <li>
                <Link to="/">List</Link>
              </li>
              <li>
                <Link to="/hot">Hot</Link>
              </li>
              <li>
                <Link to="/rank">Rank</Link>
              </li>
              <li>
                <Link to="/button">Button</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>

            <hr/>



            <hr/>

            <Route path="/" exact component={List} />
            <Route path="/hot" component={Hot} />
            <Route path="/rank" component={Rank} />
            <Route path="/button" component={Button} />
            <Route path="/login" component={Login}/>
          </div>

        </Router>
    );
  }

}

export default App;
