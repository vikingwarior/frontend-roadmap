import React from "react";

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
      - componentDidMount() -> This method is called when the component is mounted(i.e. when the component has been rendered in the DOM). the can also be considered as equivalent to useEffect() hook for a functional component

      - componentDidUpdate()
      - componentWillUnmount()
      - shouldComponentUpdate()

      NOTE - 
      If there is a child component, call stack of lifecycle methods will be as follows:
      Parent Constructior -> Parent Render -> Child Constructor -> Child Rendere-> Child ComponentDidMount -> Parent ComponentDidMount

      Explaination:
      Since the ComponentDidMount method is called only after the render method has finished execution, and the child component is present in the render method, Parent ComponentDidMount has to wait for child component to finish its execution which means all it's lifecycle methods should complete execution in order for the ComponentDidMount method to be invoked, therefore the parent ComponentDidMount method is invoked at the last.
      
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
      name: props.name,
      title: props.title
    };
  }

  render() {
    const { name, title } = this.state;

    return (
      <div>
        <h4>Employee Name: {name}</h4>
        <h4>Employee Designation: {title}</h4>
        <button
          onClick={() => {
            /*
              to update the value of a state variable, call this.setState method and pass the value of the state variable which needs to be updated, pass these values inside a json as shown below: 
            */
            this.setState({
              name: "Dynamic Name",
              title: "Dynamic Title",
            });
          }}
        >
          Click Me!
        </button>
        <br />
        <br /> 
      </div>
    );
  }

  /*
    API calls for a component are generally made inside ComponentDidMount method, as it is considered a good UX practice to generate skeleton of a component and then wait for the data response so that it can be asynchronously loaded.
  */
  componentDidMount(){
    console.log("Component Did Mount Invoked");
  }
};

export default DevCard;