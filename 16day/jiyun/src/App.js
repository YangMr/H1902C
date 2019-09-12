import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import List from "./components/List"
import Detail from "./components/Detail"
import Cart from "./components/Cart"

function App() {
  return (
    <div className="App">
      <Router>


        <Route path="/" exact component={List}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/cart" component={Cart}/>
      </Router>
    </div>
  );
}

export default App;
