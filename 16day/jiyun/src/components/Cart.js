import React from "react"

class Cart extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            shop : [],
            count: 1,
            resultCount : 0
        }

        this.delete = this.delete.bind(this);

    }


    render() {
        return (
            <div className="cart">
                <h1>我是购物车页</h1>
                <hr/>
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox"/></th>
                            <th>商品</th>
                            <th>名称</th>
                            <th>单价</th>
                            <th>数量</th>
                            <th>小计</th>
                            <th>删除</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.shop.map((item,index)=>
                                <tr key={index}>
                                    <td><input type="checkbox"/></td>
                                    <td><img src={item.imgUrl} alt=""/></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button  className="add">+</button>
                                        <input type="text" value={this.state.count}/>
                                        <button className="jian">-</button>
                                    </td>
                                    <td>{item.price * this.state.shop[index].count}</td>
                                    <td><button onClick={()=> this.delete(index)} className="del">删除</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>共计 : {this.state.resultCount}</td>
                        </tr>
                    </tfoot>

                </table>
            </div>
        )
    }

    componentDidMount() {
        if(localStorage.getItem("arrCart")){
            let data = JSON.parse(localStorage.getItem("arrCart"));
            this.setState({
                shop : data
            })

        }
    }



    delete(index){
        this.state.shop.splice(index,1);
        if(localStorage.getItem("arrCart")){
            localStorage.clear();
            localStorage.setItem("arrCart",JSON.stringify(this.state.shop))
            let data = JSON.parse(localStorage.getItem("arrCart"));
            this.setState({
                shop : data
            })

        }

    }
}

export default Cart