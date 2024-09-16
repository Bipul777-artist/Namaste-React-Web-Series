
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
        <div className="max-w-2xl mx-auto font-sans mt-4">
            <h2 className="text-2xl font-extrabold pl-1">{name}</h2>
            <div className=" border-2 border-solid shadow-slate-400 rounded-2xl p-3 my-2 shadow-3xl">
                
                    <div className="flex items-center pt-3">
                        <img className="h-4 w-4 text-center pr-1" src ={Ratings_img} />
                        <h3>{avgRating} ({totalRatingsString}) . {costForTwoMessage}</h3>
                        
                    </div>
                    <h4 className="text-orange-700 underline hover:cursor-pointer">{cuisines.join(', ')}</h4>
                    <div className="flex items-center">
                        <div className="flex flex-col items-center w-1 mt-2">
                            <div className="h-1.5 w-1.5 rounded bg-slate-400"></div>
                            <div className="h-6 w-px bg-slate-400 text-center"></div>
                            <div className="h-1.5 w-1.5 rounded bg-slate-400"></div>
                        </div>
                        <div className="inline-block mt-1.5 ml-3">
                            <div className="flex  ">
                                <h4 className="pr-3 text-base font-bold">Outlet</h4>
                                <p className="text-sm text-slate-500 text-center">{areaName}</p>
                                
                            </div>

                            <>
                                {/* <img src = {Timer_LINK} /> */}
                                <h4>{sla?.slaString}</h4>
                            </>
                        
                        </div>
                       
                    </div>

                    <div className="flex mt-3">

                        <>
                            <img className="h-5 w-5 text-center pr-1" src = {Delivery_ImgLink} />
                            <p className="text-sm text-slate-500 text-center font-semibold"> {feeDetails?.message}</p>
                        </>    
                    </div>
                    <h3></h3>
                
                
            </div>

            {<h3 className="text-xl font-bold mt-7">Deals for You</h3>}

            <div className="flex max-w-2xl gap-x-3 overflow-x-scroll">
                { 
                    
                    offers.map((item) => {
                        return (

                            <div className="flex align-center justify-start min-w-72  gap-x-2 my-5 py-4  border-2 border-solid shadow-slate-400 rounded-xl">

                                <>
                                    <img className="h-12 w-12" src = {CDN_link +  item?.info?.offerLogo} />
                                </>
                                
                                <div className="inline-block">
                                    <h3 className="text-lg font-bold tracking-tighter">{item?.info?.header}</h3>
                                    <p className="text-sm text-slate-500 font-bold">{item?.info?.couponCode}</p>
                                </div>
                               
                            </div>
                        )
                })}
            </div>
            
            
            { carousel ? 
                <div className="relative">

                            <h3 className="text-2xl font-bold my-7">{title}</h3>

                            <div className="flex max-w-2xl align-center gap-x-3 overflow-x-scroll">

                                {carousel.map((item) => {

                                    return (
                                        <div className="w-72 h-64 mb-2 relative">

                                            <img className="h-64 min-w-60 rounded-2xl" src = {CDN_link + item?.dish?.info?.imageId} />
                                            {/* <h4>{item?.dish?.info?.description}</h4> */}
                                            <div className="absolute top-0 left-0 shadow-custom-inset z-10 h-full w-full rounded-xl"></div>
                                            <h4 className="absolute top-1 left-3 text-white z-20">{item?.dish?.info?.name}</h4>
                                            {/* <p>{item?.dish?.info?.description}</p> */}
                                            {item?.dish?.info?.price ? 
                                                <h5 className="absolute bottom-2 left-3 text-white z-20">{item?.dish?.info?.price/100}</h5>
                                            : null}
                                            
                                        </div>

                                    )
                                })}
                            </div>
                         
                </div>
                : null 
            } 

           
            
        </div>
    );
};

export default RestaurantMenu;