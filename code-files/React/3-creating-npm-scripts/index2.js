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

// root.render(newJsxElem);

/**
 * Functional React Component ->
 * A Functional React Component is a function that returns either JSX or React.createElement()
 * 
 * Rule ->
 * It should be a function and always begin  with an Uppercase letter.
 * 
 * If we need to use a react component, it should be used a jsx element
 * 
 * For example
 */

const HeaderComponent = () => (
    <div>
        <h1>This is a React Functional Header Component</h1>
    </div>
);

// root.render(<HeaderComponent/>);

/**
 * Component Composition -> This when one or more components are being used inside a component that is component composition -> See line 62
 */

/**
 * To insert a JS snippet inside JSX component, enclose it inside {} braces and the lines present inside it will be rendered as pieces of JS code. -> See line 63
 */

/**
 * React functional component can also be inserted as functions. For ex. HeaderComponent can also be used with JSX syntax i.e. <HeaderComponent /> or as a normal react function i.e. {HeaderComponent()} inside JSX -> See line 64
*/

const BodyComponent = () => (
    <div>
        <HeaderComponent />
        {console.warn("This JS snippet is inserted in JSX using {}")}
        {HeaderComponent()}
        <div className='body'>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            This is a React Functional Body Component(Click here for a surprise)
            </a>
        </div>
    </div>
);

root.render(<BodyComponent />);
