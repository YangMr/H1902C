import React from "react"

class Button extends React.Component{

    constructor(props) {
        super(props);


    }

    local(e,data){
        this.props.history.push(data)
    }

    render(){
        return(
            <div className="btn">
                <button onClick={(e)=> this.local(e,"/")}>列表</button>
                <button onClick={(e)=> this.local(e,"/hot")}>热搜</button>
                <button onClick={(e)=> this.local(e,"/rank")}>排行</button>
            </div>
        )
    }
}

export default Button