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

        this.listendata = this.listendata.bind(this);
        this.del = this.del.bind(this);

        store.subscribe(this.listendata);
    }


    render(){
        return (
            <div>
                <List
                    size="small"
                    bordered
                    dataSource={this.state.book.List}
                    renderItem={(item,index) => <List.Item onClick={(e)=>this.del(e,index)}>{item}</List.Item>}
                />
            </div>
        )
    }

    del(e,index){
        alert(index)

        const action = {
            type : "del_input_value",
            value : index
        }

        store.dispatch(action)
    }

    listendata(){
        this.setState({
            book : store.getState()
        })
    }


}

export default ListName