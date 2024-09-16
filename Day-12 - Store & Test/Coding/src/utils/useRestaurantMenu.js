import { useEffect, useState } from "react"
import { RestMenu_API } from "./constant";
import RestaurantMenu from "../components/RestaurantMenu";

const useRestaurantMenu = (resId) => {
    const [resItem, setResItem] = useState(null);

    const [categoriesHeading, setCategoriesHeading] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        
        const data = await fetch(RestMenu_API + resId);

        const Json = await data.json();
        // console.log(Json);
        const itemCards = Json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(x => x?.card?.card).filter(x => x.itemCards) || null;
        setResItem(Json?.data);
        setCategoriesHeading(itemCards);

    }

    return [resItem, categoriesHeading];

}

export default useRestaurantMenu;

    
        
      