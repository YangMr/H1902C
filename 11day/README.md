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


-----------------------------------------------------------------------

# 作业：小说项目

## 功能点：

    0. 完成页面布局
    1. 点击底部导航，显示对应组件的内容
    2. 除书架页面以外，其他页面的数据需要使用axios请求数据接口获取，并进行展示
    
    
## 设置浏览器json数据格式
https://www.cnblogs.com/songyanan/p/9224347.html

## 接口地址

http://47.94.231.184/

## 接口文档

https://github.com/zimplexing/vue-nReader/blob/master/doc/zhuishushenqi.md

## 思路

1. 使用脚手架创建项目

    create-react-app 项目名称

2. 进入项目目录

    cd 项目名称

3. 启动项目

    npm start

4. 安装路由

    cnpm install react-router-dom --save
    
5. 配置路由

5.1 在App.js文件内引入安装的路由

    import { BrowserRouter as Router, Route, Link } from "react-router-dom";
    
6. 在src目录下创建 component文件夹

7. 在 component文件夹内创建 
    
    Book.jsx(小说书架文件) 
    BookCategory.jsx(小说分类文件) 
    BookRank.jsx（小说排行文件）  
    BookSearch.jsx(小说搜索文件)
    
8. 在App.js组件创建底部导航和顶部表

9. 引入创建的组件

10. 设置路由跳转

11. 安装axios

12. 在生命周期内请求数据，并进行渲染展示

