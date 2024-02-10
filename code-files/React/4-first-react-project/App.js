import React from 'react' // importing 'React' module from node_modules/react
import ReactDOM from 'react-dom/client' // importing 'ReactDOM' module from node_modules/react

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
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
    </div>
)

const RestaurantCard = () => (
    <div className='restaurantsCard'>
        <img
            src='https://b.zmtcdn.com/data/pictures/chains/0/20600/dcf3d1f28f0f64dd02ceac540ea9cc1d.jpg'
            alt='restrurant-img'
        />
        <h2>Zaranj</h2>
        < div className='stats'>
            <h3>4.3/5</h3>
            <h3>30mins</h3>
            <h3>₹2,200 for 2</h3>
        </div>
        <i>North Indian, Mughlai, Seafood, Desserts, Beverages</i>
    </div>
)

const AppComponent = () => (
    <>
        <Header />
        <Body />
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);