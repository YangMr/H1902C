//引入react
import React from "react"

//创建组件
class Header extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            va : ""
        }
    }

    render(){
        return (
            <div className="todo-header">
                <input onKeyDown={(e)=> this.save(e)} onChange={(e)=> this.getLocal(e) } type="text" placeholder="请输入任务"/>
            </div>
        )
    }

    getLocal(e){
        this.setState({
            va : e.target.value
        })


    }

    save(e){
        if(e.keyCode === 13){
            if(e.target.value === ""){
                alert("请您输入内容")
                return;
            }
            let data = [];
            let obj = {}
            if(localStorage.getItem("listArr")){
                data = eval(localStorage.getItem("listArr"));
                obj = {id : data[data.length - 1].id + 1, text : this.state.va, check: false};
            }else{
                obj = {id : 0, text : this.state.va, check: false};

            }




            data.push(obj);
            localStorage.setItem("listArr",JSON.stringify(data))

            this.props.get();

            e.target.value = ""
        }
    }
}

//导出组件
export default Header;

