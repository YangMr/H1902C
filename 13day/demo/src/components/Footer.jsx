import React from "react"

class Footer extends React.Component {
    render(){
        return (
            <div style={{display : this.props.count === 2 ? "block" : "none"}} className="box">
                <h1>售后服务</h1>
            </div>
        )
    }
}

export default Footer