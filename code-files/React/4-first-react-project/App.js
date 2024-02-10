import React from 'react' // importing 'React' module from node_modules/react
import ReactDOM from 'react-dom' // importing 'ReactDOM' module from node_modules/react

let heading = React.createElement('h1', {}, 'Hello React');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

/**
 * Header
 *  Logo
 *  Location
 *  cart
 *  account
 * 
 * Body
 *  Search
 *      search button
 *      search button
 *      filter
 *          price low to high
 *          price high to low
 *          ratings high to low
 *          distance nearest to farthest
 *          Cuisines offered
 *              cuisines list
 *  
 *  Restrurant Card
 *      Image
 *      Rating
 *      Distance
 *      Average Price
 *      Cuisines offered
 *      
 * Footer
 *  Contact
 *  Help
 *  About
 
 */