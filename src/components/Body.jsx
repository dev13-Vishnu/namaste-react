import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [resList, setResList] = useState(resData);

  const handleFilterMoreThanFourPointTwo = () => {
    const filtered = resData.filter(
      (restaurant) => restaurant.avgRating >= 4.3,
    );
    setResList(filtered);
  };
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          onClick={handleFilterMoreThanFourPointTwo}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id = {restaurant.id}
            resName={restaurant.name}
            cusine={restaurant.cuisines.join(",")}
            avgRating={restaurant.avgRating}
            deliveryTime={restaurant.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
