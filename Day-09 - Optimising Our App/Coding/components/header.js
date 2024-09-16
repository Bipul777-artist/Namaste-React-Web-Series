import { useState } from "react"
import {LOGO_link} from "../utils/constant.js"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {

    const onlineStatus = useOnlineStatus();

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
                        <li>
                          <Link className="link-tag" to="/">
                            Home
                          </Link>
                        </li>
                        <li>
                            <Link className="link-tag" to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="link-tag" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link className="link-tag" to="/grocery">
                                Grocery
                            </Link>
                        </li>
                        <li>
                            {onlineStatus ? "🟢" : "🔴"}
                        </li>
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