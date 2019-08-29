## 安装react脚手架

    cnpm install create-react-app -g 
    
## 测试react脚手架是否安装成功

    create-react-app --version 
    
## 安装yarn

    cnpm install yarn -g    
    
## 测试yarn是否安装成功

    yarn --version 
    
## 通过react脚手架创建项目

    create-react-app 项目名称    
    
## 启动项目

    npm start
    
## 打包项目

    npm run build
    
## es6 Module

    import 导入
    export default 导出
    
## 在react脚手架中如何创建组件

    函数式
        创建一个.js文件
            import React from "react"
            
            function Index(){
            
                return (
                    <div>
                        <h1>函数式组件</h1>
                    </div>
                )
            
            }
    
            export default Index
    
    
    class关键字
    
        创建一个.jsx的文件
        
        import React,{Component} from "react"
        
        class Index extends Component {
        
            render (){
                return (
                    <div>
                        <h1>我是class关键字创建的罪案</h1>
                    </div>
                )
            }
        
        }
            
        export default Index
            
    
    
    
## 组件的嵌套

