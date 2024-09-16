import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({item, showItems, setIndexVisibility}) => {
    
    const dropDown = () => {
        setIndexVisibility();
    }
    

    return (
        
        <div className="pb-2">

            <div onClick = {dropDown} className="flex justify-between mt-4 cursor-pointer">
                <span className="font-semibold text-xl">{item?.title} ({item?.itemCards.length})</span>
                <span>🔽</span>
            </div>
            
            {showItems && <ItemList cards={item?.itemCards} />}
           
        </div>
    )
}

export default RestaurantCategory;