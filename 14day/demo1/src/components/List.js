//导入react
import React from "react"
//获取List组件
import { List } from 'antd';
//引入index.js
import store from "../store/index"

//创建组件
class TodoList extends React.Component{

    constructor(props) {
        super(props);

        //设置初始化数据
        this.state = store.getState()

        //设置this的指向
        this.handleDeleteValue = this.handleDeleteValue.bind(this);
        this.handleListenValue = this.handleListenValue.bind(this);

        //监听数据的变化
        store.subscribe(this.handleListenValue)
    }


    render(){

        return (
            <div>
                <List bordered dataSource={this.state.data} renderItem={(item,index) => (
                        <List.Item onClick={(e)=> this.handleDeleteValue(e,index)}>{item}</List.Item>
                    )}
                />
            </div>
        )
    }

    //定义删除的方法
    handleDeleteValue(e,index){
        const action = {
            type : "delete_input_value",
            value : index
        }
        store.dispatch(action)
    }

    //定义监听数据的方法
    handleListenValue(){
        //更新数据
        this.setState(store.getState());
    }
}

//导出组件
export default TodoList
