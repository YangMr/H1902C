import React from "react"
import axios from "axios"

class BookCategory extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            male : [],
            female : [],
            press : []
        }
    }

    render(){

        return (
            <div className="category">
                <p>男生</p>
                <ul>
                    {
                        this.state.male.map((item,index)=>
                            <li key={index}>
                                {item.name}

                            </li>
                        )
                    }
                </ul>
                <p>女生</p>
                <ul>
                    {
                        this.state.female.map((item,index)=>
                            <li key={index}>
                                {item.name}

                            </li>
                        )
                    }
                </ul>
                <p>出版</p>
                <ul>
                    {
                        this.state.press.map((item,index)=>
                            <li key={index}>
                                {item.name}

                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
       axios.get("http://47.94.231.184/cats/lv2/statistics").then((response)=>{
           // console.log(response.data)
           let {male,female,press} = response.data;

           this.setState({
               male,
               female,
               press
           })
       }).catch((error)=>{
           console.log(error)
       })
    }
}

export default BookCategory;