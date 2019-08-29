//引入react，获取到react以及component
import React,{Component} from "react"

//创建组件
class Header extends Component {
    render(){
        return (
            <div>
                <input className="ipt" type="text" placeholder="请输入今天的任务清单，按回车键确认"/>
            </div>
        )
    }
}

//导出组件
export default Header;