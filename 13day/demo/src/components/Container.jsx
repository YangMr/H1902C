import React from "react"

class Container extends React.Component{
    render(){
        return (
            <div style={{display : this.props.count === 1 ? "block" : "none"}} className="box">
                <h1>如何购买</h1>
            </div>
        )
    }
}

export default Container