# 接口文档地址

https://github.com/bailicangdu/node-elm/blob/master/API.md

# 使用react-redux获取数据

1. 安装react-redux

    cnpm install react-redux --save
    
2. 在App.js内引入react-redux

    import {Provider} from "react-redux"
    
3. 用Provider包含要获取store数据的组件

    import store from "./store/index.js"

    <Provider store={store}>
        <Todo></Todo>
    </Provider>  
    
4. 在Todo组件内获取store的数据

    import {connent} from "react-redux" 
    
    const mapStateToProps = (state)=> {
        //这个state就是reducer.js文件的state的数据
        inputValue : state.inputValue,
        list : state.data
    }
    
    
    export default connect(mapStateToProps)(Todo) 
     