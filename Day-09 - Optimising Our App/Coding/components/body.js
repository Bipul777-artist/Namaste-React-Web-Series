import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Normla JS variable
let resTemp = [
    {"info": {
        "id": "213121",
        "name": "Wow! Momo",
        "cloudinaryImageId": "f6de3a8932bc042ca20efc3e20a2b865",
        "costForTwo": "₹200 for two",
        "cuisines": [
              "Tibetan",
              "Chinese",
              "Snacks",
              "Continental",
              "Desserts"
        ],
        "avgRating": 3.8,
        "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
        },
  },
},
{
  "info": {
        "id": "407661",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "New Market",
        "areaName": "Esplanade",
        "costForTwo": "₹350 for two",
        "cuisines": [
              "Burgers",
              "American"
        ],
        "avgRating": 4.2,
        "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
        },
        
        
  },
  
}
]

const Body = () => {
    // React Hook -- Normal JS function -- Local State Variable

    // const onlineStatus = useOnlineStatus();

    const onlineStatus = useOnlineStatus();

    const [ListOfRestaurant, setListOfRestaurant] = useState([]); 

    const[filterRestaurant, setfilterRestaurant] = useState([]);

    const [searchItem, setSearchItem] = useState("");

    useEffect(() => {
        // console.log("Use Effect is called");
        fetchData();
    }, []);

    
    const fetchData = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const jsonData =  await data.json();

        console.log(jsonData);

        setfilterRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setListOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if (onlineStatus === false) {
        return <h1>Seems like you're not Online, can you please check your Internet connection?</h1>
    }

    return (ListOfRestaurant.length === 0) ? <Shimmer /> : (
        <div className="container">
            <div className="filter">

                <div className="search">
                    <input 
                        type="text"
                        value={searchItem}
                        className="search-box"
                        onChange={(e) => {
                            setSearchItem(e.target.value);
                            console.log({searchItem});
                        }}
                    />

                    <button className="search-btn"
                         /* Filter the list of Restaurants based on Search and Update UI */

                         onClick={() => {
                            const filteredRestaurant = ListOfRestaurant.filter((res) => 
                                res.info.name.toLowerCase().includes(searchItem.toLowerCase())
                            );
                            setfilterRestaurant(filteredRestaurant);
                            
                         }}
                    >
                       Search
                    </button>

                </div>

                <button className="btn"
                    onClick={() => {
                        const filteredList = ListOfRestaurant.filter(
                            (res) => res.info.avgRating > 4.6
                        )
                        setfilterRestaurant(filteredList);
                        console.log("btn clicked");
                    }}
                >
                    Top Rated Restaurants
                    
                </button>

                
            </div>
            <div className="res-container">
                {filterRestaurant.map((restaurant) => (
                    <Link className="link-tag" to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id} ><RestaurantCard  resData={restaurant}/></Link>
                ))}
                {/* <RestaurantCard resName="KFC" cuisines="Burger, Fries"/> */}
            </div>
        </div>
    )
};

export default Body;

