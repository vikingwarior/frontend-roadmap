import React from "react";
import { GITHUB_USER_API_URL } from "../utils/constants";

/*
  This is a class Based Component
  
  to make a class based component, it needs to extend the React.Component interface,
  alternate way to extend:
  class DevCard extends Component
  
 */
class DevCard extends React.Component {
  /*
      Lifecycle of class based component:
      - constructor() -> Entry point for component all the declarations and intialization of values is done here.
      
      - render() -> This method controls display aspect of the component i.e. what will be displayed on the screen and this is the method where the core logic of entire component is written. Consider this as the functional component.
      
      - componentDidMount() -> This method is called when the component is mounted(i.e. when the component has been rendered in the DOM). This method will only be executed only for the first render of the component. the can also be considered as equivalent to useEffect() hook for a functional component with an empty dependency array.

      - componentDidUpdate() - > This method is called after ComponentDidMount() method during first render or if the component is re-rendered with the updated values, it will be executed after the render() method is called.

      - componentWillUnmount() - Executed after component is unmounted i.e. Removed from the DOM.


    For nested components:

      - Parent Component Constructor
      - Parent Component Render

        - Child 1 Component Constructor
        - Child 1 Component Render

        - Child 2 Component Constructor
        - Child 2 Component Render

        - Child 1 ComponentDidMount
        - Child 2 ComponentDidMount
      
      - Parent ComponentDidMount

      Explaination :

      React component lifecycle has 2 phases: 
      1. Mounting Phase:
        - constructor()
        - render()
      2. Commit Phase
        - DOM and the component references are updated
        - componentDidMount()

      In order to invoke the Commit phase, the Render phase for all the components must be completed in order for the Commit phase to initiate. This batching of all the components render phase is necessary to save the cost of rendering the component and make dom manipulation quicker.

      There are 3 cycles in the React lifecycle:
      - Mounting cycle
          Render phase:
            - constructor()
            - render()
            
            Commit phase:
            <Component loaded into DOM with updated refs>
            - ComponentDidMount()

      - Updating cycle
          Render phase:
          - update triggers(new props, setState(), forceUpdate(), etc...)
          - render()

          Commit phase:
            <Component loaded into DOM with updated refs and new/updated props and/or values>
            - ComponentDidUpdate()

      - Unmounting cycle
        
        Commit phase:
          <Component is Removed from DOM with updated refs>
          - ComponentWillUnmount()
    */

  /*
      if the class based component has props, then they should be passed to super() for constructor of React class, so that they can be used in other places in the component 
     */
  constructor(props) {
    super(props);

    /*
      To create state variables in Class based components in component, a json object should be passed to "this.state" this json object will contain all the names of the sate variables and their initial values in the following format:
      
      this.state ={
        stateVariable1 : 'valStateVariable1', 
        stateVariable2 : 'valStateVariable2'
        and so on...
      }

      NOTE: it is good and rather recommended practice to declare and initialize the state variable inside the constructor.
     */
    this.state = {
      userData: {
        name: "John Doe",
        location: "San Francisco, CA",
        avatar_url: "",
      },
    };

    console.log("Class Based Component Constructor");
  }

  render() {
    const { name, location, avatar_url } = this.state.userData;
    console.log("Class Based Component Render");

    return (
      <div>
        <img src={avatar_url} alt="Photo" className="aboutDevImg" />
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <br />
        <br />
      </div>
    );
  }

  /*
    API calls for a component are generally made inside ComponentDidMount method, as it is considered a good UX practice to generate skeleton of a component and then wait for the data response so that it can be asynchronously loaded.
  */
  async componentDidMount() {
    console.log("Component Did Mount Invoked");
    const response = await fetch(`${GITHUB_USER_API_URL}/vikingwarior`);
    const data = await response.json();
    this.setState({ userData: data });
  }

  componentDidUpdate(){
    console.log("Component Did Update for Class Based Component");
  }
}

export default DevCard;
