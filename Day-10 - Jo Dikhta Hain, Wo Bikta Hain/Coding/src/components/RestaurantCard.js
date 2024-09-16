import constant from "../utils/constant";
import { CDN_link } from "../utils/constant";
import { Ratings_img } from "../utils/constant";

const RestaurantCard= (props) => {
    // console.log(props);
    const {resData} = props;
    const {cuisines, name, avgRating, costForTwo, sla, cloudinaryImageId} = resData.info;

    
    
    return (
        <div className="h-52 w-56 mb-3.5 translate-x-0.5 hover:scale-90 hover:ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] hover:duration-500">
            <img src={CDN_link + cloudinaryImageId} className="w-52 h-36 rounded-md" />

            <h2 className="text-base font-bold pl-1">{name}</h2>
            
            <div className="flex font-bold">
                <h3 className="flex items-center pr-2">
                    <img className="h-4 w-4 text-center pr-1" src = {Ratings_img} />
                    {avgRating} 
                </h3>
                <h3>{sla.deliveryTime} minutes</h3>
            </div>
            
            {/* <h3>{costForTwo}</h3> */}
            <p className="text-sm text-slate-500">{cuisines.join(', ')}</p>
        </div>
   )
}

export default RestaurantCard;