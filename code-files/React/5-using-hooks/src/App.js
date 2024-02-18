import React from 'react'; // importing 'React' module from node_modules/react
import ReactDOM from "react-dom/client";  // importing 'ReactDOM' module from node_modules/react

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);