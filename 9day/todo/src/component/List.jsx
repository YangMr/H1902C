//引入react
import React from "react"

//创建组件
class List extends React.Component {



    render(){

        return (
            <ul className="todo-list">
                {
                    this.props.listArr.map((item,index)=>
                        <li key={index}>
                            <label htmlFor="">
                                <input checked={item.check} onChange={(e)=> this.che(e,index)}  type="checkbox"/>
                                <span>{item.text}</span>
                            </label>
                            <button type="button" className="btn btn-success">删除</button>
                        </li>
                    )
                }
            </ul>
        )
    }

    che(e,index){
        console.log(e.target.checked)
        if(localStorage.getItem("listArr")){
            let data = eval(localStorage.getItem("listArr"));

            data[index].check = e.target.checked;

            localStorage.setItem("listArr",JSON.stringify(data));

            this.props.get()

        }
    }


}

//导出组件
export default List;