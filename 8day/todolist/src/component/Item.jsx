import React from "react"

class Item extends React.Component{
    constructor(props){
        super(props)

        this.setCheck = this.setCheck.bind(this)
    }
    render(){
        // console.log(this.props)
        return(
            <li>
                <label htmlFor="">
                    <input type="checkbox" onChange={(e)=> this.setCheck(e,this.props.index)} checked={this.props.item.check}/>
                    <span>{this.props.item.title}</span>
                </label>
                <button type="button">删除</button>
            </li>
        )

    }

    setCheck(e,index){

        console.log(e.target.checked)
        this.props.oneCheck(e.target.checked,index)
    }
}

export  default Item