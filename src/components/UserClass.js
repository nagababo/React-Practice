import React  from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
        }
    }

    render(){
    const {name, location} = this.props
    const {count, count2} = this.state
       return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={()=>{

                // Never update state vaiable directly
                this.setState({
                    count: this.state.count + 1
                })
            }}>increase Count</button>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact: Nagababuk@hotmail.com</h4>
        </div>
    )
    }
}

export default UserClass