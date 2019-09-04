import React from 'react';

//引入路由
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import BookShelf from "./component/BookShelf";
import BookCategory from "./component/BookCategory";
import BookRank from "./component/BookRank";
import BookSearch from "./component/BookSearch";
import BookLogin from "./component/BookLogin";
import A from "./component/A";
import B from "./component/B";
function App() {
  return (
    <div className="App">
        <Router>
          <header>书架</header>
          <footer>
            <ul className="nav">
              <li>
                <Link to="/">书架</Link>
              </li>
              <li>
                <Link to="/category">分类</Link>
              </li>
              <li>
                <Link to="/rank">排行</Link>
              </li>
              <li>
                <Link to="/search">搜索</Link>
              </li>
            </ul>
          </footer>

          {/* 配置路由地址*/}
          <Route path="/" exact component={BookShelf} />
          <Route path="/category" component={BookCategory} />
          <Route path="/rank" component={BookRank} />
          <Route path="/search" component={BookSearch} />
          <Route path="/login/:id" component={BookLogin} />
          <Route path="/A/:name" component={A} />
          <Route path="/B" component={B} />

        </Router>
    </div>
  );
}

export default App;
