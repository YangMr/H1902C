//引入react
import React from "react"

//创建header组件
class Footer extends React.Component {
    render(){
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"/>
                </label>
                <span><span>已完成0件</span> / 总计2件</span>
                <button className="btn btn-warning">清除已完成任务</button>
            </div>
        )
    }
}

//导出组件
export default Footer;