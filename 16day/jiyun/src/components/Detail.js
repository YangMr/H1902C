import React from "react"

class Detail extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (
            <div className="detail">
               <div className="detail_left" key="1">
                   <img src={this.state.imgUrl} alt=""/>
               </div>
               <div className="detail_right">
                   <h3>{this.state.name}</h3>
                   <p>价格:¥{this.state.price}</p>

                   <button onClick={()=> this.jump()} className="btn">加入购物车</button>
               </div>
            </div>
        )
    }

    componentDidMount() {
        this.setState(this.props.location.query)
        console.log(this.props.location.query)
    }

    jump(){

        //[{},{}]
        if(localStorage.getItem("arrCart")){
            let data = JSON.parse(localStorage.getItem("arrCart"));
            data.push(this.state)
            localStorage.setItem("arrCart",JSON.stringify(data));
        }else{
            let arrCart = [];
            arrCart.push(this.state);
            localStorage.setItem("arrCart",JSON.stringify(arrCart));
        }


        this.props.history.push("/cart")
    }
}

export default Detail