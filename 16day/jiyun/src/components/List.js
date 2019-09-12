import React from "react"
import axios from "axios"


class List extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            list : []
        }

        this.jump = this.jump.bind(this);
    }


    render() {

        return (
            <div className="list">
                <div className="list_header">
                    我是头部
                </div>
                <div className="list_container">
                    <ul>
                        {
                            this.state.list.map((item,index)=>
                                <li onClick={()=> this.jump(index)} key={index}>
                                    <p className="list_img"><img src={item.imgUrl} alt=""/></p>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </li>
                            )
                        }

                    </ul>
                </div>
                <div className="list_footer">
                    我是底部
                </div>
            </div>
        )
    }

    componentDidMount() {
        axios.get("../data/product_list_data.json").then((response)=>{


            this.setState({
                list : response.data.productList
            })



        }).catch((error)=>{
            console.log(error);
        })
    }

    jump(index){
        this.props.history.push({pathname : "/detail",query : {count : this.state.list[index].count,flag : this.state.list[index].flag,id:this.state.list[index].id, name:this.state.list[index].name,imgUrl : this.state.list[index].imgUrl, price : this.state.list[index].price}})
    }

}

export default List