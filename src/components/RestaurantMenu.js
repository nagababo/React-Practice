import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RES_DET_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer"
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
const [showIndex, setShowIndex] = useState(null)
const [showItems, setShowItems] = useState(true)

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) return <Shimmer />

 // console.log(resInfo, "resInfo")

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

 // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards, "itemCards")

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
    <>
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>

      { categories.map((category,index)=>(

        <RestaurantCategory key= {category?.card?.card?.title} data = {category?.card?.card} showItems={index===showIndex && true} 
        setShowIndex={()=>setShowIndex(index)} />
      ))}


        {/* <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {" Rs. "} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default RestaurantMenu;
