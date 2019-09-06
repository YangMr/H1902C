import React from "react"

import {Route,Redirect} from "react-router"

class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            name : "",
            pass : "",
            flag : false
        }
    }


    render(){
        if(this.state.flag){
            return <Redirect to="/" />
        }
        return(
            <div>
                <form>
                    <p>
                        <label htmlFor="">用户名:</label>
                        <input onChange={(e)=>this.getName(e)} type="text" placeholder="请输入用户名"/>
                    </p>
                    <p>
                        <label htmlFor="">密&nbsp;&nbsp;码:</label>
                        <input onChange={(e)=>this.getPass(e)} type="password" placeholder="请输入密码"/>
                    </p>
                    <p>
                        <button onClick={()=> this.login()} type="button">登陆</button>
                    </p>
                </form>
            </div>
        )
    }

    getName(e){
        console.log(e.target.value)
        this.setState({
            name : e.target.value
        })
    }

    getPass(e){
        console.log(e.target.value)
        this.setState({
            pass : e.target.value
        })
    }

    login(){
        if(this.state.name === "jack" && this.state.pass === "123456"){
            alert("用户名与密码一直")
            this.setState({
                flag : true
            })
        }else{
            // alert("用户名或密码错误")
        }
    }
}

export default Login