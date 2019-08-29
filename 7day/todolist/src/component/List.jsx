//引入react
import React from "react"
//引入item组件
import Item from "./Item"


//创建header组件
class List extends React.Component {
    render(){

        return (
            <ul className="todo-main">
                {
                    this.props.todos.map((item,index)=>

                        <Item index={index} del={this.props.del} key={index} item={item}></Item>
                    )
                }
            </ul>
        )
    }
}

//导出组件
export default List;