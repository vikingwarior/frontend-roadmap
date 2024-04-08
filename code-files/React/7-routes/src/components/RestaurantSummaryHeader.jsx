const RestaurantSummaryHeader = () => {
  return (
    <div className="restaurantSummaryHeader">
      <div className="ratingsAndAvgCost">
        <div className="tierSvgIcon">
          <svg
            width="25"
            height="25"
            viewBox="0 0 20 20"
            fill="none"
            role="img"
            aria-hidden={true}
            strokeColor="rgba(2, 6, 12, 0.92)"
            fillColor="rgba(2, 6, 12, 0.92)"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            />
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
              style={{ "--darkreader-inline-fill": "#e8e6e3" }}
            />
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor="#21973B"
                  style={{ "--darkreader-inline-stopcolor": "#1a792f" }}
                />
                <stop
                  offset="1"
                  stopColor="#128540"
                  style={{ "--darkreader-inline-stopcolor": "#0e6a33" }}
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="ratingsDiv">4.3 (10K+ ratings)</div>
        <div className="ratingsAndCostSeperator">•</div>
        <div className="avgCostForTwoDiv">₹400 for two</div>
      </div>
      <div className="restaurantCuisines">
        <a href="localhost:1234">Burgers,</a>
        <a href="localhost:1234">Beverages</a>
      </div>
      <div className="outletLocationAndAvgDeliveryTime">
        <div className="divGraphic">
          <div className="graphicCircle"></div>
          <div className="graphicLine"></div>
          <div className="graphicCircle"></div>
        </div>
        <div className="outletInfo">
          <div className="outletLocation">Outlet: Dange Chowk</div>
          <div className="avgDeliveryTime">35-40 mins</div>
        </div>
      </div>
      <div className="deliverySummary">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648208530/surgecreatives/info"
          alt="DISTANCE_FEE_NON_FOOD_LM"
          ariaHidden="true"
        />
        <div className="deliveryInfo">
          <b>Far (6.0 kms)</b> | Additional delivery fee will apply
        </div>
      </div>
    </div>
  );
};

export default RestaurantSummaryHeader;
