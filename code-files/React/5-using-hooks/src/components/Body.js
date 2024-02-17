import { useState } from 'react';
import Search from './Search';
import Restaurant from './Restaurant'
import restaurantData from '../utils/restaurant-data';

let [restaurantsList, setRestaurantsList] = useState(restaurantData);

const Body = () => (
    <div className='body'>
        <Search setData={setRestaurantsList} />
        <Restaurant data={restaurantsList}/>
    </div>
)

export default Body;