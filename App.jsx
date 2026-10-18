import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 * - Logo
 * - Nav Items
 * body
 * - Search
 * - Restaurant container
 *      - Restaurant Card
 *          - Img
 *          - Name of restaurant, Star rating, Cusines, delivery time   
 * Footer
 * - CopyRight
 * - Links
 * - Address
 * - Contact
*/

//Header 
const Header = () => {
    return (
        <div className="header">
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" className="logo" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ()=> {
    return (
        <div className="res-card">
            <img src="https://krishnavilas.com/wp-content/uploads/2026/05/ChatGPT-Image-May-28-2026-10_27_53-AM.png" alt="res-logo" className="res-logo"/>
            <h3>Meghana Foods</h3>
            <h4>Biriyani, North Indian , Asian</h4>
            <h4>4.4 rating</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {

    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root")).render(
//   
<AppLayout/>
);
