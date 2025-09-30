import User from "./User"
import UserClass from "./UserClass"
const About = ()=>{
    return (
        <>
        <h1>This is about page</h1>
        {/* <User name ={"Nagababu functions"} location={"Vijaywada"}/> */}
        <UserClass name = {"Nagababu(classes)"} location={"Hyderabad"}/>
        </>
    )

}

export default About