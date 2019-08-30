//引入react
import React from "react"

//创建组件
class Header extends React.Component {
    render(){
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入今天的任务清单,按回车键确认"/>
            </div>
        )
    }
}

//导出组件
export default Header