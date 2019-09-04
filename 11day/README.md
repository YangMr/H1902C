# 路由的使用

## 1. 使用脚手架创建项目

    create-react-app 项目名称

## 2. 进入项目目录

    cd 项目名称

## 3. 启动项目

    npm start

## 4. 安装路由

    cnpm install react-router-dom --save

## 5. 配置路由

5.1 在App.js文件内引入安装的路由

    import { BrowserRouter as Router, Route, Link } from "react-router-dom";  
    

## 6. 路由跳转

    <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about/">About</Link>
                    </li>
                    <li>
                      <Link to="/users/">Users</Link>
                    </li>
                  </ul>
                </nav>
        
                //设置路由路径对应的组件-- 
                <Route path="/" exact component={Index} /> 同时也是设置默认加载的组件
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
              </div>
            </Router>

## 7. 路由传参