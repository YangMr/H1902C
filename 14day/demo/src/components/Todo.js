import React from "react"

import { Input,Button,List } from 'antd';


class Todo extends React.Component{
    render(){
        return (
            <div className="header-input">
                <Input placeholder="请输入要添加的信息" />
                <Button type="primary">添加</Button>
            </div>
        )
    }
}

export default Todo