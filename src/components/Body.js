import {useState} from 'react'
import RestaurantCard from "./RestaurantCard"
import restaurants  from "../utils/mockData"

const Body = () => {

const [listOfRestaurant, setListOfRestaurant]= useState(restaurants)

  const handleFilter =()=>{
    const filteredRestaurants = restaurants.filter(res=>res.info.avgRating >4.2)
    setListOfRestaurant(filteredRestaurants)
  }

  return (
    <div className="body">
      <div className="search">Search</div>
       <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>Top Rated Restaurant</button>
       </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant?.info} />
        ))}
      </div>
    </div>
  )
}
export default Body