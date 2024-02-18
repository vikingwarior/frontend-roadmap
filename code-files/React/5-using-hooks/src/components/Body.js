import { useState } from 'react';
import Search from './Search';
import Restaurant from './Restaurant'
import restaurantData from '../utils/restaurant-data';


const Body = () => {
    let [restaurantsList, setRestaurantsList] = useState(restaurantData);
    return (
        <div className='body'>
            <Search setRestaurantsList={setRestaurantsList} restaurantsList={restaurantsList} />
            <Restaurant restaurantsList={restaurantsList} />
        </div>
    )
}

export default Body;