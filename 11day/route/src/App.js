//引入react
import React from 'react';
//引入路由
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Recommended from "./component/Recommended";
import Follow from "./component/Follow";
import Hot from "./component/Hot";


function App() {
  return (
    <div className="App">
        <Router>
          <ul>
            <li>
              <Link to="/" >推荐</Link>
            </li>
            <li>
              <Link to="/follow/" >关注</Link>
            </li>
            <li>
              <Link to="/hot/" >热榜</Link>
            </li>
          </ul>

          {/*//设置路由对应的组件*/}
          <Route path="/" exact component={Recommended} />
          <Route path="/follow/" component={Follow} />
          <Route path="/hot" component={Hot} />

        </Router>
    </div>
  );
}

export default App;
