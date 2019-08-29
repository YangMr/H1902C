//引入react，获取到react以及component
import React,{Component} from "react"

//创建组件
class List extends Component {
    render(){
        return (
            <div>
                <ul>
                    <li>
                        <label htmlFor="">
                            <input type="checkbox"/>
                            Vue-拼多多项目实战-课程讲解
                        </label>
                        <span style={{display:"none"}}>删除</span>
                    </li>
                    <li>
                        <label htmlFor="">
                            <input type="checkbox"/>
                            Vue-拼多多项目实战-课程讲解
                        </label>
                        <span style={{display:"none"}}>删除</span>
                    </li>
                </ul>
            </div>
        )
    }
}

//导出组件
export default List;