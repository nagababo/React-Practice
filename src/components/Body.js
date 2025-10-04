import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import {Link} from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const onlineStatus = useOnlineStatus()
  
  const handleSearch = () => {
    const res = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredRestaurants(res);
  };

  const handleFilter = () => {
    const filteredRestaurants = restaurants.filter(
      (res) => res.info.avgRating > 4.2
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 0);
  }, []);

  const getData = async () => {
    const data = await fetch(RES_URL);
    const json = await data.json();
    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

 if( onlineStatus === false) return <h1>{"Looks like you are offline!!, please check your internet connection;"} </h1>
  return (
    <>
      {listOfRestaurant.length === 0 ? (
        <>
          <Shimmer />
        </>
      ) : (
        <div className="body">
          <div className="searchContainer">
            <div className="filter">
              <input
                type="text"
                placeholder="Enter name"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
            </div>
            <div className="filter">
              <button onClick={handleSearch}>Search</button>
            </div>
            <div className="filter">
              <button className="filter-btn" onClick={handleFilter}>
                Top Rated Restaurant
              </button>
            </div>
          </div>
          <div className="res-container">
            {filteredRestaurants.map((restaurant) => (
             <Link  key={restaurant.info.id} to={"./restaurants/"+restaurant.info.id}> <RestaurantCard
                
                resData={restaurant?.info}
              />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Body;
