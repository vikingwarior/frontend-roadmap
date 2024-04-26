import RestaurantMenuHeader from './RestaurantMenuHeader';
import RestaurantMenuBody from './RestaurantMenuBody';

const RestaurantMenu = ({menuBodyData}) => {
    return (
        <>
            <RestaurantMenuHeader />
            <RestaurantMenuBody menuBodyData={menuBodyData} />
        </>

    );
};

export default RestaurantMenu;