import React from "react"

import {connect} from "react-redux"

class Todo extends React.Component{
    render(){
        return (
            <div>
                <div className="header">
                    <input onKeyDown={(e)=> this.props.handleAddValue(e)} onChange={(e)=> this.props.handleChangeInput(e)} value={this.props.inputValue} type="text" placeholder="请输入您要添加的任务"/>
                </div>
                <ul>
                    {
                        this.props.List.map((item, index)=>
                            <li onClick={()=> this.props.handleDeleteValue(index)} key={index}>{item}</li>
                        )
                    }
                </ul>
            </div>
        )
    }




}

//获取数据
const mapStateToProps = (state)=> {
    return {
        inputValue : state.inputValue,
        list : state.data
    }
};

//提交数据 --- reducer.js
const mapDispatchToProps = (dispatch)=>{

    return {
        handleChangeInput(e){
            const action = {
                type : "change_input_value",
                value : e.target.value
            }

            dispatch(action)
        },

        handleAddValue(e){
            if(e.keyCode === 13){
                const action = {
                    type : "add_input_value",
                    value : e.target.value
                }
                dispatch(action)
            }
        },

        handleDeleteValue(index){
           const action = {
               type : "delete_input_value",
               value : index
           }
           dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)