import React from "react"

class Item extends React.Component{

    constructor (props){
        super(props)

        this.state = {
            bool : ""
        }
    }

    render(){

        return (
            <li onMouseOver={()=>this.toggle(true)} onMouseOut={()=>this.toggle(false)}>
                <label htmlFor="">
                    <input type="checkbox" />
                    <span>{this.props.item.title}</span>
                </label>
                <button onClick={()=> this.props.del(this.props.index)} style={{display : this.state.bool ? "block" : "none"}} className="btn btn-warning" type="button">删除</button>
            </li>
        )
    }

    toggle(flag){
        this.setState({
            bool : flag
        })
    }
}

export default Item;