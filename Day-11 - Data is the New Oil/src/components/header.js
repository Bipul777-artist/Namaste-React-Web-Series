import { useState, useContext } from "react"
import {LOGO_link} from "../utils/constant.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Header = () => {

    const onlineStatus = useOnlineStatus();

    const [btnName, setbtnName] = useState("LogIn");

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);
    

    return (
        
        <section className="shadow-lg">
            <div className=" max-w-7xl flex justify-between font-sans align-center text-base">
                <div>
                    <img className="w-32 h-32" src={LOGO_link} alt="" />
                </div>
                <div className="">
                    <ul className="flex mt-10">
                        <li className="ml-10">
                          <Link className="link-tag" to="/">
                            Home
                          </Link>
                        </li>
                        <li className="ml-10">
                            <Link className="link-tag" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="ml-10">
                            <Link className="link-tag" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="ml-10">
                            <Link className="link-tag" to="/grocery">
                                Grocery
                            </Link>
                        </li>
                        <li className="ml-10">
                            {onlineStatus ? "🟢" : "🔴"}
                        </li>
                        <li className="ml-10">Cart</li>

                        <button className="bg-orange-500 border rounded-lg w-18 px-2 py-1 ml-6"
                            onClick={() => {
                                btnName === "LogIn"
                                ? setbtnName("LogOut")
                                : setbtnName("LogIn");
                            }}
                        >
                            {btnName}
                        </button>

                        <li className="ml-10">
                            {loggedInUser}
                        </li>
                        
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Header;