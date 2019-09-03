//引入react
import React from "react"

//创建组件
class Hot extends React.Component {
    render(){
        return (
            <div className="hot">
                <div className="hot-top">
                    <h4>热门搜索</h4>
                </div>
                <ul>
                    <li>仲秋节放假</li>
                    <li>国庆节方法</li>
                    <li>积云教育方法</li>
                    <li>考试得了100分</li>
                    <li>老师很开心</li>
                </ul>

            </div>
        )
    }
}

//导出组件
export default Hot