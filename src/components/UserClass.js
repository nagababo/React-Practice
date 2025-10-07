import React  from "react";
import UserContext from "../utils/userContext"

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
           <UserContext.Consumer>
            {({loggedInUser})=><h1 className="font-bold">user:{loggedInUser}</h1>}
           </UserContext.Consumer>
            
        </div>
    )
    }
}

export default UserClass