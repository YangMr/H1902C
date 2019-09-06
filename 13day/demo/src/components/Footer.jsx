import React from "react"

class Footer extends React.Component {
    render(){
        return (
            <div style={{display : !this.props.flag ? "block" : "none"}}>
                <h1>我是底部</h1>
            </div>
        )
    }
}

export default Footer