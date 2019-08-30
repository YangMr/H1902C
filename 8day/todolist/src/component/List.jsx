//引入react
import React from "react"
import Item from "./Item"


//创建组件
class List extends React.Component {
    render(){

        return (
            <div className="todo-main">
                <ul>

                    {
                        this.props.listArr.map((item,index)=>
                            <Item index={index} oneCheck={this.props.oneCheck} item={item} key={index}></Item>
                        )
                    }




                </ul>
            </div>
        )
    }
}

//导出组件
export default List