import React from 'react'; // importing 'React' module from node_modules/react
import ReactDOM from "react-dom/client";  // importing 'ReactDOM' module from node_modules/react
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Importing Routing configurator for application(createBrowserRouter) and routing configuration provider(RouterProvider)

// Importing components
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';

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
        element: <AppComponent />,
    },
    {
        path: '/about',
        element: <About />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);