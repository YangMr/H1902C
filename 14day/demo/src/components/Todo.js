import React from "react"

import { Input,Button,List } from 'antd';

import store from "../store/index"

class Todo extends React.Component{

    constructor(props) {
        super(props);

        //定义state
        this.state = store.getState();

        //设置this的指向
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleAddValue = this.handleAddValue.bind(this);

        //订阅/监听
        store.subscribe(this.handleChangeValue);
    }


    render(){
        return (
            <div className="header-input">
                <Input onChange={(e)=>this.handleInputChange(e)} value={this.state.inputValue} placeholder="请输入要添加的信息" />
                <Button onClick={()=> this.handleAddValue()}  type="primary">添加</Button>
            </div>
        )
    }

    handleInputChange(e){
        const action = {
            type : "change_input_value",
            value : e.target.value
        }
        store.dispatch(action)
    }

    handleChangeValue(){
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

export default Todo