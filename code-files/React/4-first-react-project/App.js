import React from 'react' // importing 'React' module from node_modules/react
import ReactDOM from 'react-dom/client' // importing 'ReactDOM' module from node_modules/react

const Header = () => (
    <div className="header">
        <img
            src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png'
            className='logo' />
        <ul className='nav-options'>
            <li>Home</li>
            <li>Cart</li>
            <li>Account</li>
        </ul>
    </div>
)

const AppComponent = () => (
    <Header />
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);