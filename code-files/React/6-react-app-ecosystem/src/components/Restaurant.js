import { useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { API_URL } from '../utils/constants'

const Restaurant = ({ restaurantsList, setRestaurantsList }) => {
    /*
        useEffect() =>
        React Hook that is used to run a function when the component is rendered or removed from the DOM.

        It is trigger at the end of the render and removal states component lifcycle.

        Initalizing useEffect hook:
        useEffect(() =>{'callback function'}, [Dependency Array]);
     */
    useEffect(async () => {
        const data = await fetch(API_URL);
        const dataJSON = await data?.json();
        setRestaurantsList(dataJSON.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }, []);
    return (
        <div className='restaurants'>
            {
                restaurantsList?.map((data) => <RestaurantCard key={data.info.id} resData={data} />)
            }
        </div>
    )
}

export default Restaurant;