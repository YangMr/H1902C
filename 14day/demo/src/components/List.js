import React from "react"
import { List } from 'antd';
import store from "../store/index"


//初始化列表渲染的数据
// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];


class ListName extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            book : store.getState()
        }
    }


    render(){
        console.log(this.state.book.list)
        return (
            <div>
                <List
                    size="small"
                    bordered
                    dataSource={this.state.book.list}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        )
    }
}

export default ListName