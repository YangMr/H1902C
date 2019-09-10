import React from "react"

import store from "../store/index"

import axios from "axios"

class Todo extends React.Component{

    constructor(props) {
        super(props);

        this.state = store.getState();

        //指定this
        this.handleDeleteValue = this.handleDeleteValue.bind(this);
        this.listenData = this.listenData.bind(this);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleAddValue = this.handleAddValue.bind(this)
        //订阅
        store.subscribe(this.listenData);
    }

    componentDidMount() {
        axios.get("https://elm.cangdu.org/v1/cities",{
            params : {
              type : "hot"
            }
        }).then((response)=>{
            console.log(response.data);

            const action = {
                type : "city_hot_data",
                value : response.data
            }

            store.dispatch(action)

        }).catch((error)=>{
            console.log(error)
        })
    }

    render(){
        return (
            <div className="todo">
                <div className="todo-header">
                    <input onKeyDown={(e)=> this.handleAddValue(e)} onChange={(e)=> this.handleInputValue(e)} type="text" value={this.state.inputValue} placeholder="请输入您要添加的任务"/>
                </div>
                <ul className="todo-list">
                    {
                        this.state.data.map((item,index)=>
                            <li onClick={()=> this.handleDeleteValue(index)} key={index}>{item.name}</li>
                        )
                    }
                </ul>
            </div>
        )
    }

    handleAddValue(e){
        if(e.keyCode === 13){
            if(e.target.value === ""){
                return;
            }else{
                const action = {
                    type : "add_input_value",
                    value : e.target.value
                }
                store.dispatch(action)
            }

        }

    }

    handleInputValue(e){
        const action = {
            type : "change_input_value",
            value : e.target.value
        }
        store.dispatch(action)
    }

    handleDeleteValue(index){

        //创建数据
        const action = {
            type : "delete_input_value",
            value : index
        }

        //发送到reducer
        store.dispatch(action)

    }

    listenData(){
        this.setState(store.getState())
    }
}

export default Todo