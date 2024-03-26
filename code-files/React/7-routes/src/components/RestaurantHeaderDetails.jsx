const RestaurantHeaderDetails = () => {
  return (
    <div className="restaurantHeaderDetails">
      <div className="restaurantInfo">
        <h3>KFC</h3>
        <p>Burgers, Biryani</p>
        <p>
          <b>Chinchwad</b> | ₹47 Delivery fee will apply
        </p>
      </div>
      <div className="restaurantRating">
        <span className="averageRating">
          {/* <img src="https://cdn-icons-png.flaticon.com/512/9715/9715468.png" /> */}
          <span>4.2</span>
        </span>
        <span className="totalRatings">1k+ Ratings</span>
      </div>
    </div>
  );
};

export default RestaurantHeaderDetails;
