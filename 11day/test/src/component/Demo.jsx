import React from "react"

class Demo extends React.Component{
    render(){

        return (
            <div>
                <button onClick={()=> this.sendList()} >跳转到list组件</button>
            </div>
        )
    }

    sendList(){
        this.props.history.push({pathname : "/list/123"})
        console.log(this.props)
    }
}

export default Demo