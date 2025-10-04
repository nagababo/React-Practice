import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RES_DET_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) return <Shimmer />

  console.log(resInfo,"resInfo")

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
 // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroup?.REGULAR?.cards[1]?.card?.card;

  return (
    <>
      <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
