import React from "react";
import ReactDOM from "react-dom/client";
/*

 Header
  *Logo
  *NavItems
 Body
      -Search
      -Retaurant container
        -Restro card
          -Img
          -Name Of the Res , Star Rating, Cuisine, delivery time
 Foooter
    -Copyrights
    -Links
    -Address
    -Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = () => {

  return (
    <div className="res-card" >
      <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/14/dff34b28-5a3b-4ec2-b757-ff8106a491fc_daa1d2cb-b9f5-4f43-b123-d194d1f6ba4a.png" />
      <h3>Meghana Foods</h3>
      <h4>Birayani, North Indian, Asian</h4>
      <h4>4.4 star</h4>
      <h4>38 min</h4>

    </div>
  )
}
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}
const AppLayout = () => {

  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
