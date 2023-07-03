import React from "react";


const Navbar=()=>{
    return(
        <div className="navbar">
            <nav className="main-nav">
                <div className="logo"><img className="heritagehands-1-icon" src="./assets/logo.png" alt="logo here" /></div>
                <div className="menu-link"><ul>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div className="search-cart">

                <form className="search-form">
                <input className="search-bar" type="text" placeholder="Search"></input>
                <button type="submit" className="submit-button"><i class="uil uil-search-alt search-icon"></i></button>
                </form>
                <i class="uil uil-shopping-cart-alt cart-icon"  ></i>
                <i class="uil uil-user-circle user-icon" ></i>
                </div>

                {/* HAMBURGER MENU  */}
                <div className="hamburger-menu">
                <i class="uil uil-bars hamburger-icon"></i>
                </div>
            </nav>
        </div>

        
    )
};

export default Navbar;