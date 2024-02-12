import React from 'react' // importing 'React' module from node_modules/react
import ReactDOM from 'react-dom/client' // importing 'ReactDOM' module from node_modules/react
import restaurantData from './restaurant-data.js';

console.log(restaurantData);

const Header = () => (
    <div className="header">
        <img
            src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png'
            className='logo'
        />
        <ul className='nav-options'>
            <li>Home</li>
            <li>Cart</li>
            <li>Account</li>
        </ul>
    </div>
)

const Body = () => (
    <div className='body'>
        <Search />
        <Restaurant />
    </div>
)

const Search = () => (
    <div className='searchOptions'>
        <center>
            <input
                type='text'
                placeholder='Search for a Restrurant or a dish'
                className='searchBox'
            />
            <input
                type='button'
                value='Search'
                className='searchDivBtn'
            />
            <input
                type='button'
                value='Filter'
                className='searchDivBtn'
            />
        </center>
    </div>
)

const Restaurant = () => (
    <div className='restaurants'>
        {
            /**
             props(slang for properties) -> are attributes sent when using a react component all the props sent with a react component are wrapped inside an Object and sent to the Component call.
             
             'key' is an exception, it is a reserved keyword in React library it is used as a reference to identify each component uniquely
             */
            restaurantData.map((data) => <RestaurantCard key={data.info.id} resData={data} />)
        }
    </div>
)

const RestaurantCard = ({ resData }) => {
    const { name, costForTwo, cuisines, avgRating, slaString, cloudinaryImageId } = resData.info;
    return (
        <div className='restaurantsCard'>
            <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
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
}

const AppComponent = () => (
    <>
        <Header />
        <Body />
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);