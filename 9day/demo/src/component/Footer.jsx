import React from "react"

class Footer extends React.Component {
    render(){
        return (
            <div className="footer">

                <input onChange={()=>this.props.changeSelectedAllFinshed(this.props.finshedCount !== this.props.totalCount)} type="checkbox" checked={this.props.finshedCount === this.props.totalCount}/>
                <span>已完成{this.props.finshedCount}个任务</span>/
                <span>总任务{this.props.totalCount}个</span>

                <button onClick={()=> this.props.delChange()}>删除选中的所有任务</button>
            </div>
        )
    }
}

export default Footer