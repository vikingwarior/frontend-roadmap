/*
    React Hooks ->
    Javascript functions present in React Utility Library that helps UI layer to adapt to changes in the data layer and vice-versa. 

    To import a hook:
    import {hookName} from 'react'
 */
import { useEffect, useState } from 'react';
import Search from './Search';
import Restaurant from './Restaurant'
import restaurantData from '../utils/restaurant-data';
import { API_URL } from '../utils/constants'


const Body = () => {
    /*
        useState() =>
        Creates a state object that maintains the state of the component upon which the hook is applied.
        
        Initalizing a state variable.
        let[varName, serVarName] = useState(initalVale);
     */
    let [restaurantsList, setRestaurantsList] = useState(restaurantData);

    /*
        useEffect() =>
        React Hook that is used to run a function when the component is mounted and unmounted.
     */
    useEffect(async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'); 
        const dataJSON = await data.json();
        console.log(dataJSON);   
    }, []);
    return (
        <div className='body'>
            <Search setRestaurantsList={setRestaurantsList} restaurantsList={restaurantsList} />
            <Restaurant restaurantsList={restaurantsList} />
        </div>
    )
}

export default Body;