import React from "react"

class Item extends React.Component {
    render() {
        return (
            <tbody>
                {
                    this.props.shop.map((item,index)=>
                        <tr key={index}>
                            <td><input type="checkbox"/></td>
                            <td><img src={item.imgUrl} alt=""/></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button  className="add">+</button>
                                <input type="text" value={this.props.count}/>
                                <button className="jian">-</button>
                            </td>
                            <td>{item.price * this.props.shop[index].count}</td>
                            <td><button onClick={()=> this.props.delete(index)} className="del">删除</button></td>
                        </tr>
                    )
                }
            </tbody>
        )
    }
}

export default Item