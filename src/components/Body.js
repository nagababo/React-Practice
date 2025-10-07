import { useContext, useEffect, useState } from "react";
import RestaurantCard , {withTopRatedLabel}from "./RestaurantCard";
import restaurants from "../utils/mockData";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import {Link} from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const onlineStatus = useOnlineStatus()
  const RestaurantCardWithLabel = withTopRatedLabel(RestaurantCard)

  const {loggedInUser,setUserName}= useContext(UserContext)
  
  console.log(listOfRestaurant,"listOfRestaurant")
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
        <div>
            <div className="flex">
              <div className="m-4">
                <input
                  type="text"
                  className="border border-solid border-black"
                  placeholder="Enter name"
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                />
              </div>
              <div className="m-4">
                <button className=" bg-green-100 rounded-lg" onClick={handleSearch}>Search</button>
              </div>
              <div className="m-4">
                <button className="bg-blue-100 rounded-lg" onClick={handleFilter}>
                  Top Rated Restaurant
                </button>
              </div>

               <div className="m-4">
                  <input type="text" value={loggedInUser} placeholder="enter text" onChange={(e)=> setUserName(e.target.value)}/>
              </div>
            </div>



            <div className=" flex flex-wrap">
              {filteredRestaurants.map((restaurant) => (
              <Link  key={restaurant.info.id} to={"./restaurants/"+restaurant.info.id}> 

              {restaurant.info.avgRating > 4.1 ? (<RestaurantCardWithLabel resData={restaurant?.info} /> ):  ( <RestaurantCard
                  
                  resData={restaurant?.info}
                />) }
             
                </Link>
              ))}
            </div>
        </div>
      )}
    </>
  );
};
export default Body;
