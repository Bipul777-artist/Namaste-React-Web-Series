import { useState } from "react";
import { Drop_Down_img } from "../utils/constant";

const MenuList = ({heading, item}) => {


    const [clicked, setClicked] = useState(false);

    const toggleDown = () => {
        setClicked(!clicked);
    }


    return (
        <div className="flex bold">
            <div className="header-class" onClick={toggleDown}>
                <h2>{heading}</h2>
                <img src = {Drop_Down_img} />
            </div>

            <div style={{display : clicked ? 'block'  : 'none'}}>
                <h3>{item}</h3>
            </div>
        </div>
    )
};

export default MenuList;