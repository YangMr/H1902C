import React from "react"
import axios from "axios"
class City extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            arr : [],
            a : []
        }
    }

    //组件渲染前
    componentWillMount() {

    }

    // 正在渲染时
    render() {
        return (
            <div>
                <h1>我是city组件</h1>
                <ul>
                    {
                        this.state.arr.map((item,index)=>
                            <li key={index}>{item.name}</li>
                        )
                    }
                </ul>

                <hr/>

                <ul>
                    {
                        this.state.a.map((item,index)=>
                            <li key={index}>{item.title}</li>
                        )
                    }
                </ul>
            </div>
        )
    }

    //组件渲染完成后
    componentDidMount() {
        //请求的时人们城市数据
        axios.get(
            "https://elm.cangdu.org/v1/cities",
            {
                params:{type : "hot"}
            }).then((resposne)=>{
                console.log(resposne)
            this.setState({
                arr : resposne.data
            })
        }).catch((error)=>{
            console.log(error)
        })

        //获取本地的数据

        this.setState({
            a : eval(localStorage.getItem("test"))
        })

    }
}

export default City