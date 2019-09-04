import React from "react"

class A extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                hello
            </div>
        )
    }
}

export  default  A