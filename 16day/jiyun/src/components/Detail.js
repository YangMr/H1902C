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
                   <p>{this.state.price}</p>
               </div>
            </div>
        )
    }

    componentDidMount() {

        // this.state.data.push(this.props.location.query);
        console.log(this.props.location.query)

        this.setState(this.props.location.query)

        // console.log(this.state.data)
    }
}

export default Detail