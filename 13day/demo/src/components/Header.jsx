import React from "react"

class Header extends React.Component {
    render(){

        return (
            <div style={{display : this.props.flag ? "block" : "none"}}>
                <h1>我是头部</h1>
            </div>
        )
    }
}

export default Header