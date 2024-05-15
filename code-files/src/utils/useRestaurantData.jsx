import { useEffect, useState } from "react";
import { RESTAURANT_SUMMARY_DATA_API_URL } from "../utils/constants";

const useRestaurantData = (resId) => {
  [resData, setResData] = useState({})

  useEffect(() => {
    fetchResData();
  }, []);

  fetchResData = async () => {
    const data = await fetch(RESTAURANT_SUMMARY_DATA_API_URL + resId);
    const dataJSON = await data?.json();
    setResData(dataJSON);
  };

  return resData;
};

export default useRestaurantData;
