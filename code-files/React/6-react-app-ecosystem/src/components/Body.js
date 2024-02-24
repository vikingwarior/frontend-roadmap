/*
    React Hooks ->
    Javascript functions present in React Utility Library that helps UI layer to adapt to changes in the data layer and vice-versa. 

    To import a hook:
    import {hookName} from 'react'
 */
import { useState, useEffect } from 'react';
import { API_URL } from '../utils/constants'
import Search from './Search';
import Restaurant from './Restaurant'
import Shimmer from './Shimmer';

export let originalRestaurantData = [];

const Body = () => {
    /*
        useState() =>
        Creates a state object that maintains the state of the component upon which the hook is applied.
        
        Initalizing a state variable.
        let[varName, serVarName] = useState(initalVale);
     */
    let [restaurantsList, setRestaurantsList] = useState([]);

    /*
        useEffect() =>
        React Hook that is used to run a function when the component is rendered or removed from the DOM.

        It is trigger at the end of the render and removal states component lifcycle.

        Initalizing useEffect hook:
        useEffect(() =>{'callback function'}, [Dependency Array]);
     */
    useEffect(async () => {
        const data = await fetch(API_URL.GET);
        const dataJSON = await data?.json();
        originalRestaurantData = dataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantsList(originalRestaurantData);
    }, []);

    return (
        <div className='body'>
            <Search setRestaurantsList={setRestaurantsList} restaurantsList={restaurantsList} />
            {
                restaurantsList.length === 0
                    ? <Shimmer />
                    : <Restaurant restaurantsList={restaurantsList} setRestaurantsList={setRestaurantsList} />
            }
        </div>
    )
}

export default Body;