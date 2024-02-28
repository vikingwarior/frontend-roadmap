import RestaurantCard from './RestaurantCard'

const Restaurant = ({ restaurantsList, setRestaurantsList }) => {
    return (
        <div className='restaurants'>
            {
                restaurantsList?.map((data) => <RestaurantCard key={data.info.id} resData={data} />)
            }
        </div>
    )
}

export default Restaurant;