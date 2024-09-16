import constant from "../utils/constant";
import { CDN_link } from "../utils/constant";

const RestaurantCard= (props) => {
    // console.log(props);
    const {resData} = props;
    const {cuisines, name, avgRating, costForTwo, sla, cloudinaryImageId} = resData.info;

    
    
    return (
        <div className="res-card">
            <img src={CDN_link + cloudinaryImageId} className="res-logo" />

            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRating} 🌟</h3>
            <h3>{costForTwo}</h3>
            <h3>{sla.deliveryTime} minutes ETA</h3>
        </div>
   )
}

export default RestaurantCard;