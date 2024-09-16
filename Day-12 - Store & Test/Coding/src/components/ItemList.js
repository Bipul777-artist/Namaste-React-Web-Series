import { Ratings_img, CDN_LINK } from "../utils/constant";
import {useDispatch} from "react-redux";
import { addItem } from "../utils/cartSlice";


const ItemList = ({cards}) => {
    console.log(cards);
    
    // Intialising the use of Redux 
    const dispatchAction = useDispatch();

    const handleAddItems = (item) => {
        // Dispatch Item when Add btn is clicked.
        dispatchAction(addItem(item));
    }

    return (
        <div>
            {cards.map((item) => {
                return (
                    
                    <div key={item?.card?.info?.id} className="mt-4 ml-2 pb-3  flex justify-between border-b-2 border-slate-300">
                        <div className="w-9/12 text-wrap">
                            <h3 className="text-xl font-bold text-slate-700">{item?.card?.info?.name}</h3>
                            <p className="text-base font-bold ">Rs {item?.card?.info?.price/100}</p>
                            {item?.card?.info?.ratings?.aggregatedRating?.rating ?

                                <div className="flex align-center">
                                
                                    <img className="h-4 w-4 text-center pr-1 pt-1" src = {Ratings_img} />
                                 
                                    <p>{item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p>
                                
                                
                                </div> : null
                        
                            }
                            
                            
                            <p className="max-w-lg text-wrap text-sm font-semibold text-slate-400">{item?.card?.info?.description}</p>
                        </div>

                        <div className="w-3/12 relative text-red-400">
                            
                            <img className="min-w-40 min-h-36 rounded py-auto shadow" src = {CDN_LINK + item?.card?.info?.imageId} />
                            <button 
                                className="text-green-600 bg-white border absolute rounded -bottom-1 left-9 m-auto w-20 uppercase hover:bg-slate-400"
                                onClick={() => handleAddItems(item)}
                            >
                                
                                Add +
                                
                            </button>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
};

export default ItemList;