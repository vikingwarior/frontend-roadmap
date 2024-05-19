import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";

const Restaurant = ({ restaurantsList }) => {
  /* 
    Fetching Higher order component of RestaurantCard
    Enter this function(WithPromotedLabel) to read more about Higher Order Component

    WithPromotedLabel returns a Component therefore,

    RestaurantCardPromoted = (props) => {
      return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
    }
  */
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  return (
    <div className="restaurants">
      {restaurantsList?.map((data) =>
        data.info.promoted === true ? (
          <RestaurantCardPromoted key={data.info.id} resData={data} />
        ) : (
          <RestaurantCard key={data.info.id} resData={data} />
        )
      )}
    </div>
  );
};

export default Restaurant;
