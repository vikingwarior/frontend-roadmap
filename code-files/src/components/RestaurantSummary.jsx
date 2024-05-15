import BreadCrumb from "./BreadCrumb";
import RestaurantSummaryHeader from "./RestaurantSummaryHeader";
import DealsCarousel from "./DealsCarousel";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantSummaryShimmer from "./RestaurantSummaryShimmer";

import { useParams } from "react-router-dom"; //  hook provided be react router to fetch the variable mentioned inside the router(marked by :)

import useRestaurantData from "../utils/useRestaurantData";

const RestaurantSummary = () => {

  const {resId} = useParams(); // extracting the value associated with :resId variable mentioned in the router configuration using useParams() hook.

  const resData = useRestaurantData(resId); // This is a custom hook that is used to modify the restaurantData, it returns a state variable that will have the restaurnt data fetched from the Swiggy API.

  // Getter functions for data
  const getSummaryHeaderData = () => resData.data.cards[2].card.card.info;

  const getDealsArray = () =>  resData.data.cards[3].card.card.gridElements.infoWithStyle.offers;

  const getMenuBodyData = () => resData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

  return (
    <div className="restaurantSummaryWrapper">
      <div className="restaurantSummary">
        {Object.keys(resData).length === 0 ? (
          <RestaurantSummaryShimmer />
        ) : (
          <>
            <BreadCrumb />
            <h1>{resData.data.cards[0].card.card.text}</h1>
            <RestaurantSummaryHeader summaryHeaderData={getSummaryHeaderData()}/>
            <DealsCarousel dealsInfo={getDealsArray()} />
            <RestaurantMenu menuBodyData={getMenuBodyData()}/>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantSummary;
