import { useState } from "react"
import {LOGO_link} from "../utils/constant.js"

const Header = () => {

    const [btnName, setbtnName] = useState("LogIn");
    // console.log('header rendered');
    
    return (
        <section className="container">
        
            <div className="header">
                <div>
                    <img className="logo" src={LOGO_link} alt="" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>More</li>
                        <li>Contact</li>
                        <li>Cart</li>
                        <button className="login"
                            onClick={() => {
                                btnName === "LogIn"
                                ? setbtnName("LogOut")
                                : setbtnName("LogIn");
                            }}
                        >
                            {btnName}
                        </button>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Header