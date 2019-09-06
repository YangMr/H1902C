import React from "react"

class Search extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            count : 0
        }
    }


    render(){
       return (
           <div>
               {/*搜索框*/}
               <div className="search-input">
                   <input type="text" onChange={(e)=>this.lis(e)}  placeholder="请输入您想要搜索的书名"/>
               </div>

               {/*热搜词*/}
               <div style={{display : this.state.count === 0 ? "block" : "none" }}>
                   <ul>
                       {
                           this.props.hots.map((item,index)=>
                               <li key={index}>{item.word}</li>
                           )
                       }
                   </ul>
               </div>

               <ul style={{display : this.state.count == 1 ? "block" : "none"}}>
                   {
                       this.props.auto.map((item,index)=>
                           <li key={index}>{item}</li>
                       )
                   }
               </ul>

           </div>
       )
    }

    lis(e){
       console.log(e.target.value)

        if(e.target.value !== ""){
            this.setState({
                count : 1
            })
        }else{
            this.setState({
                count : 0
            })
        }

        this.props.get(e.target.value)

    }



}

export default Search