import {CDN_URL} from '../utils/constants'

const RestaurantCard = ({ resData }) => {
    const { name, costForTwo, cuisines, avgRating, slaString, cloudinaryImageId } = resData.info;
    return (
        <div className='restaurantsCard'>
            <img
                src={CDN_URL + cloudinaryImageId}
                alt='restrurant-img'
            />
            <h2>{name}</h2>
            < div className='stats'>
                <h3>{avgRating}/5</h3>
                <h3>{slaString}</h3>
                <h3>{costForTwo}</h3>
            </div>
            <i>{cuisines.join(', ')}</i>
        </div>
    )
};

export default RestaurantCard;