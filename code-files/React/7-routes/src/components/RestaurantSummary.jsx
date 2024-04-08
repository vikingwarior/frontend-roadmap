import BreadCrumb from './BreadCrumb';
import RestaurantSummaryHeader from './RestaurantSummaryHeader';
import DealsCarousel from './DealsCarousel';
import RestaurantMenu from './RestaurantMenu';

import {RESTAURANT_SUMMARY_DATA_API_URL} from "../utils/constants";

const RestaurantSummary = () => {
  return (
    <div className="restaurantSummaryWrapper">
      <div className="restaurantSummary">
        <BreadCrumb />
        <h1>McDonald's</h1>
        <RestaurantSummaryHeader />
        <DealsCarousel />
        <RestaurantMenu />
      </div>
    </div>
  );
};

export default RestaurantSummary;
