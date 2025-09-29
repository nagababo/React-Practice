import { useEffect, useState } from "react";
const RestaurantMenu = () => {

    const [resInfo, setResInfo]= useState(null)

    const {name}= resInfo?.cards[0].card?.card.info?.name


    useEffect(()=>{
        fetchMenu()

    },[])

    const fetchMenu = async()=>{
        const data = await fetch("")

        const json = await data.json()
        console.log(json,"")
        setResInfo(json.data)

    }

    return  (
        <>
            <div className="menu">
                <h1>{resInfo?.cards[0].card?.card.info?.name}</h1>
                <h2>Menu</h2>
                <ul>
                    <li>Birayani</li>
                    <li>Burgers</li>
                    <li>Diet Coke</li>
                </ul>

            </div>
        </>
    )
}

export default RestaurantMenu;