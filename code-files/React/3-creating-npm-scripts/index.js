import React from '../../../node_modules/react' // importing 'React' module from node_modules/react
import ReactDOM from '../../../node_modules/react-dom/client' // importing 'React' module from node_modules/react

let elemBody = React.createElement('div', {}, [
    React.createElement('h1', {}, 'Child 1'),
    React.createElement('div', {}, [
        'Sibling of Child 1',
        React.createElement('h2', {}, 'child of sibling of child 1'
)])]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elemBody);