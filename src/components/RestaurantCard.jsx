import { LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ id,resName, cusine , avgRating, deliveryTime}) => {
  return (
    <div className="res-card">
      <img
        src={`${LOGO_URL}/id/${id}/600/400`}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{resName}</h3>
      <h4>{cusine}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;