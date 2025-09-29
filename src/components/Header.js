import { useContext,useState } from "react"
import { LOGO_URL } from "../utils/constants"

const Header = () => {
  const [btnText,setBtnText] = useState('Log In')
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li><button className="" onClick={()=>{
        setBtnText(btnText ==="Log In" ? "Log Out" : "Log In")
          }}>
            {btnText}
            </button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header