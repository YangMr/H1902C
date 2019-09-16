import React from "react"

class Item extends React.Component{
    render(){
        return (
            <tbody>
                {
                    this.props.shop.map((item,index)=>
                        <tr key={index}>
                            <td><input type="checkbox"/></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={()=>this.add(index)}>+</button>
                                <input value={item.count} type="text"/>
                                <button onClick={()=> this.jian(index)}>-</button>
                            </td>
                            <td>{item.price * item.count }</td>
                            <td><button>删除</button></td>
                        </tr>
                    )
                }
                <tr>
                    <td colSpan="6">总价：{this.props.result} </td>
                </tr>
            </tbody>
        )
    }

    add(index){
        this.props.changeCount(index)
    }

    jian(index){
        this.props.jianCount(index)
    }
}

export default Item