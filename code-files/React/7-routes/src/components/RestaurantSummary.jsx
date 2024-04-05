import BreadCrumb from './BreadCrumb';
import RestaurantSummaryHeader from './RestaurantSummaryHeader';
import DealsCarousel from './DealsCarousel';
import RestaurantMenu from './RestaurantMenu';

const RestaurantSummary = () => {
  return (
    <div className="restaurantSummary">
      <BreadCrumb />
      <RestaurantSummaryHeader />
      <DealsCarousel />
      <RestaurantMenu />
    </div>
  );
};

export default RestaurantSummary;
