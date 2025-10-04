import { useEffect, useState } from "react";
import { RES_DET_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RES_DET_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo
}

export default useRestaurantMenu;