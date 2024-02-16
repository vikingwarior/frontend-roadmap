//Imporing data
import restaurantData from '../restaurant-data';
import RestaurantCard from './RestaurantCard'

const Restaurant = () => (
    <div className='restaurants'>
        {
            restaurantData.map((data) => <RestaurantCard key={data.info.id} resData={data} />)
        }
    </div>
)

export default Restaurant;