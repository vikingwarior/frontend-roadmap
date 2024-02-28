import React from 'react'; // importing 'React' module from node_modules/react
import ReactDOM from "react-dom/client";  // importing 'ReactDOM' module from node_modules/react
import { createBrowserRouter } from 'react-router-dom' // Importing Routing configurator for application

// Importing components
import Header from './components/Header';
import Body from './components/Body';

const AppComponent = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
};

/**
 *  To  create Routes, i.e. Paths to various pages of an application react-router-dom is used
*/

const appRouter = createBrowserRouter([
    {
        path: '/',
        component: <AppComponent />
    },
    {
        path: '/about',
        component: <About />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);