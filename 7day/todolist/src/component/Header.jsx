//引入react
import React from "react"

//创建header组件
class Header extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            text : ""
        }
    }

    render(){
        return (
            <div className="todo-header">
                <input value={this.state.text} onChange={(e)=>this.change(e)} onKeyDown={(e)=>this.test(e)} type="text" placeholder="请输入今天的任务清单，按回车键确认"/>
            </div>
        )
    }

    //创建test方法
    test(e){
        if(e.keyCode === 13){
            let obj = {title : this.state.text, check : false}
            this.props.add(obj)
            this.setState({
                text : ""
            })
        }
    }

    change(e){
        console.log(e.target.value)
        this.setState({
            text : e.target.value
        })
    }
}

//导出组件
export default Header;