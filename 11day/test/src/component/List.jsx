import React from "react"

class List extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>我是list组件</h1>
            </div>
        )
    }
}

export default List