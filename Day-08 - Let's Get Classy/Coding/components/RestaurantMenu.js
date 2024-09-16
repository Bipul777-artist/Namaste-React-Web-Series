import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { CDN_link } from "../utils/constant";
import { Ratings_img, Timer_LINK, Delivery_ImgLink, Search_img, Drop_Down_img, Drop_Up_img, RestMenu_API } from "../utils/constant";
import { useParams } from "react-router-dom";

// const resID = "774068, 3022, 3638, 130766"

const RestaurantMenu = () => {

    const [resData, setresData] = useState(null);

    const [dropDown, setDropDown] = useState(Drop_Down_img);

    const [menuData, setmenuData] = useState(null);

    const [restaurantMenu, setRestaurantMenu] = useState(null);

    const [categoriesHeading, setCategoriesHeading] = useState([]);

    const [isActive, setIsActive] = useState(false);

    const [MenuSearch, setMenuSearch] = useState('Search')

    const {resId} = useParams();

    console.log(resId)
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {

        const data = await fetch(RestMenu_API + resId);
    
        const Jsondata = await data.json();

        const itemCards = Jsondata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(x => x?.card?.card).filter(x => x.itemCards) || null;

        // const restHeadings = Jsondata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(x => x?.card?.card).find(x => x['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
        // console.log(restHeadings);
        // console.log(Jsondata);
        // setRestaurantMenu(itemCards);
        // console.log(restaurantMenu);

        setCategoriesHeading(itemCards);
        console.log(categoriesHeading);
        setresData(Jsondata.data);
        setmenuData(Jsondata.data);
       
        
    }

    if (resData === null) return <Shimmer />

    // console.log(menuData);
    // const {menuItems, id} = resData?.cards[2]?.card?.card;
    // console.log(menuItems);
   

    const {name, cuisines, avgRating, totalRatingsString, costForTwoMessage, sla, areaName, feeDetails} = resData?.cards[2]?.card?.card?.info;

    const {offers} = resData?.cards[3]?.card?.card?.gridElements?.infoWithStyle;

    const {title, carousel} = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   
 
    return(
        <div className="res-menu">
            <h2>{name}</h2>
            <div className="first-section">
                <div>
                    <div className="first-subsection">
                        <img className="star-img" src ={Ratings_img} />
                        <h3>{avgRating} ({totalRatingsString}) . {costForTwoMessage}</h3>
                        
                    </div>
                    <h4 className="cuisines">{cuisines.join(', ')}</h4>
                    <div className="second-subsection">
                        <div className="bob-line">
                            <div className="bob"></div>
                            <div className="line"></div>
                            <div className="bob"></div>
                        </div>
                        <div className="second-subsection-2">
                            <div className="outlet-info">
                                <h4>Outlet</h4>
                                <p>{areaName}</p>
                                
                            </div>

                            <div>
                                {/* <img src = {Timer_LINK} /> */}
                                <h4>{sla?.slaString}</h4>
                            </div>
                        
                        </div>
                       
                    </div>

                    <div className="second-subsection-3">

                        <>
                            <img src = {Delivery_ImgLink} />
                            <p> {feeDetails?.message}</p>
                        </>    
                    </div>
                    <h3></h3>
                </div>
                {/* <h2>{menuItems?.itemCards[0]?.card?.info?.name}</h2>
                <h3>{areaName + ", " +  sla.lastMileTravelString}</h3>
                <div className="res-message">
                    <img src= {CDN_link + feeDetails.icon} />
                    <p>{feeDetails.message}</p>
                </div> */}
            </div>

            {<h3>Deals for You</h3>}
            <div className="second-section">
                

                { 
                    
                    offers.map((item) => {
                        return (
                            <div className="offers-container">

                                <>
                                    
                                    <img className="offer-img" src = {CDN_link +  item?.info?.offerLogo} />
                                </>
                                
                                <div className="offers-subsection">
                                    <h3>{item?.info?.header}</h3>
                                    <p>{item?.info?.couponCode}</p>
                                </div>
                                    
                                
                                
                                
                            </div>
                        )
                })}
            </div>
            
            {/* <div className="third-section">
                <h5>
                    Menu
                </h5>
                <div className="MenuSearch-container">
                  
                        <input type = "text" 
                            className="menu-search-bar"
                            value={MenuSearch}
                            onChange={(e) => {
                                setMenuSearch(e.target.value)
                            }}
                            onClick={() => {
                                
                            }}
                        /> 
                        <img className="search-img" src = {Search_img} />
                    
                    
                </div>
                
            </div> */}
            { carousel ? 
                <div className="fourth-section">

                            <h3>{title}</h3>

                            <div className="carousel-container">

                                {carousel.map((item) => {

                                    return (
                                        <div className="carousel-section">

                                            <img className="carousel-img"  src = {CDN_link + item?.dish?.info?.imageId} />
                                            {/* <h4>{item?.dish?.info?.description}</h4> */}
                                            <div className="overlay"></div>
                                            <h4>{item?.dish?.info?.name}</h4>
                                            <p>{item?.dish?.info?.description}</p>
                                            <h5>{item?.dish?.info?.price/100}</h5>
                                        </div>

                                    )
                                })}
                            </div>
                            
                    
                </div>
                : null }

            <div className="fifth-section">
                {categoriesHeading ?

                    <div className="restaurantMenu">

                        {categoriesHeading.map((item) => {
                            return (
                                <div className="retaurant-container">
                                    
                                        <h2>{item?.title } ({item?.itemCards.length})</h2>
                                        
                                        {item?.itemCards.map((data) => {
                                            return (
                                                <div className="restaurant-cuisines">
                                                    <div className="restaurant-info">
                                                        <h3>{data?.card?.info?.name}</h3>
                                                        <h5>{data?.card?.info?.defaultPrice/100}</h5>
                                                        <div className="ratings-section">

                                                            <img className= "" src = {Ratings_img} />
                                                            <>
                                                                <h5>{data?.card?.info?.ratings?.aggregatedRating?.rating}</h5>
                                                                <p>({data?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p>
                                                            </>
                                                            
                                                        </div>

                                                        <p>{data?.card?.info?.description}</p>
                                                    </div>
                                                    
                                                    {CDN_link + data?.card?.info?.imageId ? 
                                                        <img className="food-img" src = {CDN_link + data?.card?.info?.imageId} />
                                                    :   <div className="blank" ></div>}
                                                    
                                                    
                                                </div>
                                            )
                                        })}
                                    
                                </div>
                            )
                        })}

                    </div> : null
                }
            </div>
        </div>
    );
};

export default RestaurantMenu;