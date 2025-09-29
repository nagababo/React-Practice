import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import Shammer from "./Shammer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = ()=>{
    const res = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchInput.toLowerCase()))
    setFilteredRestaurants(res)

  }

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
    const data = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );
    const json = await data.json();
    // console.log(json.data.cards[1].card.gridElements.infoWithStyle.restaurants[0].info, "json")

    // const restaurants = json.data.cards[1].card.gridElements.infoWithStyle.restaurants;

    //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,"json");
    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
        setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
)


    // → Array of all restaurant objects

    //console.log(json.data.gridElements.infoWithStyle.restaurants[0].info)
  };

  return (
    <>
      {listOfRestaurant.length === 0 ? (
        <>
          <Shammer/>
        </>
      ) : (
        <div className="body">
          <div className="searchContainer">
            <div className="filter">
              <input type="text" placeholder="Enter name" value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}} />
            </div>
            <div className="filter">
              <button onClick={handleSearch} >
                Search
              </button>
            </div>
            <div className="filter"> 
              <button className="filter-btn" onClick={handleFilter}>
                Top Rated Restaurant
              </button>
            </div>
          </div>
          <div className="res-container">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.info.id}
                resData={restaurant?.info}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Body;
