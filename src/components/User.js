import React  from 'react'
import {useState} from 'react'
const User = ({name,location})=>{

    const[ count, setCount] = useState(0)
    return (
        <div className="user-card">
            count:{count}
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact: Nagababuk@hotmail.com</h4>
        </div>
    )
}

export default User