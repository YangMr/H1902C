import React from "react"

class BookLogin extends React.Component{
    render(){
        console.log(this.props.match.params.id)
        return (
            <div>
                <h1>我是小说登陆组件</h1>

            </div>
        )
    }
}

export default BookLogin;