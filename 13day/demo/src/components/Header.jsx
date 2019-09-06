import React from "react"

class Header extends React.Component {
    render(){

        return (
            <div style={{display: this.props.count ===0 ? "block" : "none"}} className="box">
                <h1>商品介绍</h1>
            </div>
        )
    }
}

export default Header