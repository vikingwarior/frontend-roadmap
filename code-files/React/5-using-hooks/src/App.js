import { React } from 'react' // importing 'React' module from node_modules/react
import { ReactDOM } from 'react-dom/client' // importing 'ReactDOM' module from node_modules/react

// Importing components
import { Header } from "./components/Header";
import { Body } from './components/Body';
import {Search} from './components/Search';
import {Restaurnt} from './components/Restaurant'
import {RestaurntCard} from './components/RestaurantCard'

//Imporing data
import { restaurantData } from './restaurant-data';

const AppComponent = () => (
    <>
        <Header />
        <Body />
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);