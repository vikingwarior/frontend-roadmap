import React from 'react' // importing 'React' module from node_modules/react
import ReactDOM from 'react-dom/client' // importing 'ReactDOM' module from node_modules/react

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Equivalent of:
 * React.createElement('h1', {}, 'React element using JSX🚀');
 * 
 * JSX syntax is parsed and converted to React.createElement() using Babel.
 * Babel => JS complier
 * 
 * JSX => React.createElement(using Babel) => HTML_Element(when root.render is triggered)
 *->Attributes inside JSX are written using camelCase
 */
let newJsxElem = (
    <>
    <input type='button' value='btn using jsx' />
        <label>
            <input type='radio' value='radio1'/>
            Radio using JSX
        </label>
    </>
);
root.render(newJsxElem);
console.log('test');