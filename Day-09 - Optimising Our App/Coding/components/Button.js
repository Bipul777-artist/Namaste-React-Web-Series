import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { Drop_Down_img, Drop_Up_img } from "../utils/constant";


// function ButtonClass () {


//     const [buttons, setButtons] = useState(Drop_Down_img);
//     const [indexTracker, setIndexTracker]  = useState(null);
//     // const [toggle, setToggle] = useState(true);

//     const toggleDown = (index) => {
//         buttons === Drop_Down_img ?  
            
//                 setButtons(Drop_Up_img)
//        : 
//         setButtons(Drop_Down_img)
//     }

//     return (

//         <button className="" onClick={() => toggleDown(index)}>
//           {buttons}
//         </button>
//     )
// }

// export default ButtonClass;

const MainComponent = (props) => {

    const {resId} = useParams();
    const [resData, categoriesHeading] = useRestaurantMenu(resId);


    const MyComponent = ({categoriesHeading}) => {

        const [visibility, setVisibility] = useState(categoriesHeading.map(() => true));
        
        const EventHandler = index => {
            setVisibility(visibility.map((item, i) => (i === index ? !item : item)))
        }
        
        return (
               <div>
                    console.log(categoriesHeading);
                    {categoriesHeading ? 
                        <div>
                            {categoriesHeading.map((item, index) => {
                                // <h3>{item.card?.card?.title}</h3>
                                console.log(item);
                            })}
                        </div> : null
                    }
               </div>
                
            )
        }
    
    
}



export default MainComponent;

