import React from "react"

class List extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            active : "active",
        }
    }


    render(){
        return (
            <ul>
                {
                    this.props.listArr.map((item,index)=>
                        <li className={item.finshed ? "active" : ""}>
                            <label htmlFor="">
                                <input type="checkbox" onChange={(e)=>this.props.changeFinshed(e.target.checked,index)} checked={item.finshed}/>
                                <span>{item.content}</span>
                            </label>
                        </li>
                    )
                }


            </ul>
        )
    }
}

export default List