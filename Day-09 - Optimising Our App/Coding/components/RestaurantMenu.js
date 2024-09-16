
import Shimmer from "./shimmer";
import { CDN_link } from "../utils/constant";
import { Ratings_img, Timer_LINK, Delivery_ImgLink, Search_img, Drop_Down_img, Drop_Up_img, RestMenu_API } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState } from "react";
import ButtonClass from "./Button";
import MyComponent from "./Button";
import MainComponent from "./Button";





// const resID = "774068, 3022, 3638, 130766"

const RestaurantMenu = (props) => {

    const [buttons, setButtons] = useState(Drop_Down_img);
    const [indexVisibility, setIndexVisibility] = useState(null);
    

    const toggleDropDown = () => {

        return(
            buttons === Drop_Down_img ? setButtons(Drop_Up_img) : setButtons(Drop_Down_img)
        )

            //  setIndexVisibility(indexVisibility === index ? null : index)

                // buttons === Drop_Down_img ?  
                        
                //         setButtons(Drop_Up_img)
                // : 
                // setButtons(Drop_Down_img)}


    }

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDown = () => {
        setIsExpanded(isExpanded);
    }

    const {resId} = useParams();

    const [resData, categoriesHeading] = useRestaurantMenu(resId);
    // console.log(categoriesHeading);


    const onlineStatus = useOnlineStatus();

    if (resData === null) return <Shimmer />

    const {name, cuisines, avgRating, totalRatingsString, costForTwoMessage, sla, areaName, feeDetails} = resData?.cards[2]?.card?.card?.info;

    const {offers} = resData?.cards[3]?.card?.card?.gridElements?.infoWithStyle;

    const {title, carousel} = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const MyComponent = ({categoriesHeading}) => {
        const [visibility, setVisibility] = useState(categoriesHeading.map(() => true));

        const HandleEvent = index => {
            setVisibility(visibility.map((item, i) => i === index ? !item : item))
        }
    }

   if (onlineStatus === false) {
        return <h1>Seems like you're not Online, can you please check your Internet connection?</h1>
   }
 
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
                : null 
            } 

            <div className="restaurant-cuisines">
                <MainComponent />
            </div>

            
        </div>
    );
};

export default RestaurantMenu;