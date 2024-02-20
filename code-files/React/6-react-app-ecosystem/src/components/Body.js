/*
    React Hooks ->
    Javascript functions present in React Utility Library that helps UI layer to adapt to changes in the data layer and vice-versa. 

    To import a hook:
    import {hookName} from 'react'
 */
import { useState } from 'react';
import Search from './Search';
import Restaurant from './Restaurant'

const Body = () => {
    /*
        useState() =>
        Creates a state object that maintains the state of the component upon which the hook is applied.
        
        Initalizing a state variable.
        let[varName, serVarName] = useState(initalVale);
     */
    let [restaurantsList, setRestaurantsList] = useState();

    console.log("component rendered");
    return (
        <div className='body'>
            <Search setRestaurantsList={setRestaurantsList} restaurantsList={restaurantsList} />
            <Restaurant restaurantsList={restaurantsList} setRestaurantsList={setRestaurantsList} />
        </div>
    )
}

export default Body;