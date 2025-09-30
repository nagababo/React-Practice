import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RES_DET_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId }= useParams();

  console.log(resId, "resId");
  //const {name}= resInfo?.cards[0].card?.card.info?.name

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_DET_URL + resId );

    const json = await data.json();
    console.log(json, "");
    setResInfo(json.data.cards[2].card.card.info);
  };

  return (
    <>
      <div className="menu">
        <h1>{resInfo?.name}</h1>
        <h2>Menu</h2>
        <ul>
          <li>Birayani</li>
          <li>Burgers</li>
          <li>Diet Coke</li>
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
