//引入react
import React from "react"

//创建组件
class Footer extends React.Component {
    render(){

        return (
            <div className="todo-footer">
                <label htmlFor="">
                    <input checked={this.props.cCheck} onChange={(e)=> this.get(e)} type="checkbox"/>
                    <span>已完成{this.props.count}件</span> /
                    <span>共计3件</span>
                </label>
                <button type="button">清空已完成任务</button>
            </div>
        )
    }



    get(e){
        console.log(e.target.checked)
        this.props.changeCheck(e.target.checked)
        this.props.changeC(e.target.checked)
    }
}

//导出组件
export default Footer