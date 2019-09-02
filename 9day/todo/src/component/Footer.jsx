//引入react
import React from "react"

//创建组件
class Footer extends React.Component {
    render(){
        return (
            <div className="todo-footer">
                <label htmlFor="">
                    <input type="checkbox"/>
                    <span>已完成0件</span><span>共计3件</span>
                </label>
                <button type="button" className="btn btn-primary">清空已完成的任务</button>
            </div>
        )
    }

}


//导出组件
export default Footer;