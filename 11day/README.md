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

--------------------------------------------------------

## 路由传参

1. 动态路由传参

2. query传参

3. state来进行传参

## 路由跳转

1. 通过Link

2. this.props.history.push({pathname: url, query/state})


## 今天晚上作业

### 天天小说项目

完成如下功能：

     0. 完成页面布局
     1. 点击底部导航，显示对应组件的内容
     2. 除书架页面以外，其他页面的数据需要使用axios请求数据接口获取，并进行展示
     3. 点击分类组件的内容,进入分类详情页面,并展示分类详情页面内容功能
     4. 点击书架页面按钮，跳转到小说分类页面功能
     
涉及到的核心知识点：

    1. 路由的安装
    2. 路由的引入
    3. 路由的配置
    4. 使用Link进行路由跳转
    5. 使用js方式进行路由跳转
    6. 路由传递参数与路由接收参数
    6. axios的安装
    7. axios的引入
    8. axios请求数据与发送数据
    

其他的知识点都是前面的基础，有什么问题可以问老师或者自己查阅以前的资料解决  

### 把第七单元的笔试题抄两遍


#### 注意： 作业一定要写，代码一定要写， 学习的路上没有那么多捷径，我们能做的就是多写多敲多练
  
    

