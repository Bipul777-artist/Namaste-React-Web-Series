import RestaurantCard, {HighlyOrdered} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RestMain_API } from "../utils/constant";
import UserContext from "../utils/UserContext";

const Body = () => {
    
    // React Hook -- Normal JS function -- Local State Variable

    const onlineStatus = useOnlineStatus();

    const [ListOfRestaurant, setListOfRestaurant] = useState([]); 

    const[filterRestaurant, setfilterRestaurant] = useState([]);

    const [searchItem, setSearchItem] = useState("");

    const MostOrdered = HighlyOrdered(RestaurantCard);
   

    const {loggedInUser, setUserName} = useContext(UserContext);

    useEffect(() => {
        // console.log("Use Effect is called");
        fetchData();
    }, []);

    
    const fetchData = async () => {
        
       try {

            const data = await fetch(RestMain_API);
    
            const jsonData =  await data.json();
        // console.log(jsonData);

            setListOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            setfilterRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

       } 
       catch {
        console.log("Error");
       }
        
    };
    
    return ListOfRestaurant.length === 0 ? (<Shimmer />) : (

        <div className="max-w-7xl">
            <div className="max-w-4xl flex justify-between mx-auto mb-5">

                    <div className=" ">

                        <input 
                            data-testid = "searchInput"
                            type="text"
                            value={searchItem}
                            className= "mt-4 border-solid border-2 border-indigo-200 rounded-lg hover:border-amber-700 focus:border-amber-700 focus:outline-none"
                            onChange={(e) => {
                                setSearchItem(e.target.value);
                                console.log({searchItem});
                            }}
                        />

                        <button className="mt-4 bg-orange-500 text-black ml-3 px-3 py-1 rounded hover:text-white"
                            

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

                    <button className="mt-4 bg-orange-500 ml-3 px-3 py-1 rounded text-slate-5f hover:text-white"
                        onClick={() => {

                            const filteredList = ListOfRestaurant.filter(
                                (res) => res.info.avgRating > 4.6
                            )
                            setfilterRestaurant(filteredList);
                            // console.log("btn clicked");
                        }}
                    >
                        Top Rated Restaurants
                        
                    </button>

                    <div className="mt-10">
                        <label>UserName: </label>
                        <input 
                            className="border-2 border-teal-600 rounded"
                            value={loggedInUser}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
            </div>
                {/* {console.log(ListOfRestaurant)} */}
                {console.log(filterRestaurant)}

                    <div className="max-w-6xl mx-auto flex justify-center gap-10 flex-wrap hover:ease-in duration-75">

                        {filterRestaurant.map((restaurant) =>  (

                            <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id} >

                                {restaurant?.info?.totalRatingsString > "4K" ? (
                                    <MostOrdered resData={restaurant?.info} />
                                    
                                    ) : 
                                    <RestaurantCard resData={restaurant?.info}/>
                                }

                            </Link>
                        ))}
                        {/* <RestaurantCard resName="KFC" cuisines="Burger, Fries"/> */}
                    </div>
                
                

        </div>
    
    )
};

export default Body;

