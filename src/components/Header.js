import { useContext, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router"

const Header = () => {
  const [btnText, setBtnText] = useState('Log In')
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
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
            <Link to="./cart">Cart</Link>
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