//引入react
import React from "react"

//创建组件
class History extends React.Component {
    render(){
        return (
            <div className="history">
               <div className="history-top">
                   <h4>搜索历史</h4>
                   <span onClick={()=> this.del()}>删除</span>
               </div>
                <ul>
                    {
                        this.props.historyData.map((item,index)=>
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
            </div>
        )
    }

    del(){
        localStorage.clear()
    }
}

//导出组件
export default History