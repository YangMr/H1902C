//导入react
import React from "react"
//获取Input组件
import { Input,Button } from 'antd';
//引入store里面的index.js文件
import store from "../store/index"

//创建组件
class TodoHeader extends React.Component{
    constructor(props) {
        super(props);

        //初始化数据
        this.state = store.getState();

        //定义this的指向
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleListenChange = this.handleListenChange.bind(this);
        this.handleAddValue = this.handleAddValue.bind(this);

        //监听
        store.subscribe(this.handleListenChange);
    }

    render(){
        return (
            <div className="list">
                <Input onChange={(e)=> this.handleChangeValue(e)} value={this.state.inputValue} placeholder="请输入您要添加的任务"/>
                <Button onClick={()=> this.handleAddValue()} type="primary">添加</Button>
            </div>
        )
    }

    handleChangeValue(e){
        const action = {
            type : "change_input_value",
            value : e.target.value
        }
        store.dispatch(action)
    }

    handleListenChange(){
        //更新数据
        this.setState(store.getState())
    }

    handleAddValue(){
        const action = {
            type : "add_input_value",
            value : this.state.inputValue
        }

        store.dispatch(action)
    }
}

//导出组件
export default TodoHeader
