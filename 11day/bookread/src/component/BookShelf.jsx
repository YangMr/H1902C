import React from "react"
import {  Link } from "react-router-dom"
class BookShelf extends React.Component{
    render(){
        return (
            <div>
                <h1>我是小说书架组件</h1>

                <button>
                    <Link to={{pathname:"/login/5a39ca3ffc84c2b8ef82da82"}}>跳转</Link>
                </button>

                <button>
                    <Link to={{pathname : "/A", query : {name: "jack"}}}>跳转A组件</Link>
                </button>

                <button>
                    <Link to={{pathname : "/B", state : {name: "jack"}}}>跳转B组件</Link>
                </button>

                <button type="button" onClick={()=> this.sendA()}>js动态路由传值</button>
            </div>
        )
    }

    sendA(){
        this.props.history.push({pathname : "/A/123" })
    }
}

export default BookShelf;