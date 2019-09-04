import React from "react"

class B extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                hello
            </div>
        )
    }
}

export  default  B