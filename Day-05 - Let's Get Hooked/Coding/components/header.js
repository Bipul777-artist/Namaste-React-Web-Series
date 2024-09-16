import {LOGO_link} from "../utils/constant.js"

const Header = () => (
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
                </ul>
            </div>
        </div>
    </section>
)

export default Header