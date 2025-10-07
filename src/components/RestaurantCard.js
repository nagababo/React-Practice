import { useContext } from "react"
import { CDN_URL } from "../utils/constants"
import UserContext from "../utils/userContext"
const RestaurantCard = (props) => {
  const { id, name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } = props?.resData

  const { loggedInUser} = useContext(UserContext)
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200" >
      <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
        <h4 className="font-bold">{loggedInUser}</h4>
      

    </div>
  )
}

export const withTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg">
          TopRated
        </label>

        <RestaurantCard {...props} />
      </div>
    )
  }
}
export default RestaurantCard