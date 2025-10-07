import { useContext, useState, useContext} from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/userContext"

const Header = () => {
  const [btnText, setBtnText] = useState('Log In')

  const onlineStatus = useOnlineStatus()
  const data = useContext(UserContext)
  return (
    <div className=" flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="">
        <img className="w-56" src={LOGO_URL} />
      </div>

      <div className="flex items-center" >
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status:{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="./"> Home</Link>
          </li>
          <li className="px-4">

            {/* <a href="/about"> About Us </a> */}
            <Link to="./about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="./contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="./grocery">Grocery</Link>
          </li>
          <li className="px-4"><button className="" onClick={() => {
            setBtnText(btnText === "Log In" ? "Log Out" : "Log In")
          }}>
            {btnText}
          </button>

          </li>
          <li className="px-4 font-bold"> 
           {data.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header