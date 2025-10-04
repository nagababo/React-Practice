import { useContext, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
  const [btnText, setBtnText] = useState('Log In')

  const onlineStatus = useOnlineStatus()
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            Online Status:{onlineStatus? "✅" : "🔴"}
          </li>
          <li>
            <Link to="./"> Home</Link>
          </li>
          <li>

            {/* <a href="/about"> About Us </a> */}
            <Link to="./about">About Us</Link>
          </li>
          <li>
            <Link to="./contact">Contact Us</Link>
          </li>
          <li>
            <Link to="./grocery">Grocery</Link>
          </li>
          <li><button className="" onClick={() => {
            setBtnText(btnText === "Log In" ? "Log Out" : "Log In")
          }}>
            {btnText}
          </button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header