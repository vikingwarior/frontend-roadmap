import BreadCrumb from "./BreadCrumb";
import RestaurantSummaryHeader from "./RestaurantSummaryHeader";
import DealsCarousel from "./DealsCarousel";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantSummaryShimmer from "./RestaurantSummaryShimmer";

import { RESTAURANT_SUMMARY_DATA_API_URL } from "../utils/constants";

import { useState } from "react";
import { useEffect } from "react";

const RestaurantSummary = () => {
  const sampleDataId = "680893";

  const [resData, setResData] = useState({});

  useEffect(() => {
    (async () => {
      const data = await fetch(RESTAURANT_SUMMARY_DATA_API_URL + sampleDataId);
      dataJSON = await data?.json();
      setResData(dataJSON);
    })();
  }, []);

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
