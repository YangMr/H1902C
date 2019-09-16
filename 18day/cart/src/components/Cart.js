import React from "react"
import Item from "./Item"


class Cart extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            shop : [
                {
                    name : "冰糖雪梨",   //商品名称
                    price : 3,          //商品价格  -- 单价
                    count : 1,          //商品数量  -- 数量
                    flag : false        //复选框是否选中，默认为不选中
                },
                {
                    name : "娃哈哈",   //商品名称
                    price : 4,          //商品价格
                    count : 3,          //商品数量
                    flag : false        //复选框是否选中，默认为不选中
                },
                {
                    name : "冰红茶",   //商品名称
                    price : 3,          //商品价格
                    count : 4,          //商品数量
                    flag : false        //复选框是否选中，默认为不选中
                },
                {
                    name : "茉莉花茶",   //商品名称
                    price : 3,          //商品价格
                    count : 10,          //商品数量
                    flag : false        //复选框是否选中，默认为不选中
                }
            ],
            result : 0
        }

        this.changeCount = this.changeCount.bind(this)
        this.jianCount = this.jianCount.bind(this);
        this.resultCount = this.resultCount.bind(this);
    }

    changeCount(index){
        let arr = this.state.shop;
        arr[index].count = arr[index].count + 1;
        this.setState(arr);
        this.resultCount()
    }

    jianCount(index){
        let arr = this.state.shop;
        arr[index].count = arr[index].count - 1
        this.setState(arr);
        this.resultCount();
    }

    componentDidMount() {

        // let countArr = [];
        // this.state.shop.forEach((item,index)=>{
        //     countArr.push(item.count * item.price);
        // })
        // let result = countArr.reduce((emp,item,index)=>{
        //     return emp + item;
        // })
        // console.log(result)

        this.resultCount()

    }

    resultCount(){
        let countArr = [];
        this.state.shop.forEach((item,index)=>{
            countArr.push(item.count * item.price);
        })
        let result = countArr.reduce((emp,item,index)=>{
            return emp + item;
        })
        this.setState({
            result : result
        })
    }

    render(){
        return (
            <div>
                <h1>我是购物车</h1>
                <hr/>
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox"/></th>
                            <th>名称</th>
                            <th>价格</th>
                            <th>数量</th>
                            <th>小计</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <Item result={this.state.result} jianCount={this.jianCount} changeCount={this.changeCount} shop = {this.state.shop}></Item>
                </table>
            </div>
        )
    }
}

export default Cart