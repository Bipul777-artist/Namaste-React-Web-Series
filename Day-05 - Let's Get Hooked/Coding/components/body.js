import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

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
    const[ListOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
        <div className="container">
            <div className="search">
                <button className="btn"
                    onClick={() => {
                        const filteredList = ListOfRestaurant.filter(
                            (res) => res.info.avgRating > 4.5
                        )
                        console.log(resTemp);
                        setListOfRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                
               
            </div>
            <div className="res-container">
                {ListOfRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
                {/* <RestaurantCard resName="KFC" cuisines="Burger, Fries"/> */}
            </div>
        </div>
    )
}

export default Body;

/*
{resTemp.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resData={restaurant} />
                ))}
*/