import React, { Suspense, lazy, useContext, useState, useEffect } from "react"; // importing 'React' module from node_modules/react
import ReactDOM from "react-dom/client"; // importing 'ReactDOM' module from node_modules/react
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // Importing Routing configurator for application(createBrowserRouter) and routing configuration provider(RouterProvider)
import useNetworkStatus from "./utils/useNetworkStatus";

// Importing components
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import NetworkErrorComponent from "./components/NetworkErrorComponent";
import RestaurantSummaryShimmer from "./components/RestaurantSummaryShimmer";

//Importing Context
import UserContext from "./utils/UserContext";

/*
  lazy() -> A react utility that helps you chunk the data mentioned inside it.
  i.e. The component/data is fetched when it needs to be rendered on to the UI.
*/
const About = lazy(() => import("./components/About"));
const RestaurantSummary = lazy(() => import("./components/RestaurantSummary"));

const AppComponent = () => {
  /*
    useNetworkStatus() -> is a custom hook that returns true if the network is offline and false if the network is online.

    Difference between a function and a hook function, a hook is a function that uses the features of react ecosystem to fulfill its purpose. Whereas a normal utility function only uses the javascript features to fulfill its purpose.

    Generally, a hook function will begin with term 'use' followed by the name. It is not a rulebut a general convention.
  */
  const isOffline = useNetworkStatus();
  const getComponentAsPerNetworkStatus = (isOffline) => {
    /*
      <Outlet> -> used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
    */
    return isOffline ? <NetworkErrorComponent /> : <Outlet />;
  };

  /*
    Context ->
    Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props(drilling props).

    useContext -> 
    useContext is a Hook. Just like useState and useReducer, you can only call a Hook immediately inside a React component (not inside loops or conditions). useContext tells React that the Header component wants to read the UserContext.
   */
  const { userNameValue } = useContext(UserContext);
  const [userName, setUserName] = useState(userNameValue);

  useEffect(() => {
    const data = {
      name: "Harsh Paradkar",
    };
    setUserName(data.name);
  }, []);

  return (
    /*
      To alter the value of context for a set block of App/Component, the value can be defined in "value" prop of "UserContext.Provider" component
      and nest that block of code under <UserComponent.Provider> JSX tag
     */
    <UserContext.Provider value={{ userNameValue: userName }}>
      <div className="app">
        <Header />
        {getComponentAsPerNetworkStatus(isOffline)}
      </div>
    </UserContext.Provider>
  );
};

/*
  To create Routes, i.e. Paths to various pages of an application react-router-dom is used.

  createBrowserRouter() -> is a configurator that stores all routes of the application in an array of JSON objects where each route is a json object containing the path and the corresponding component to load.

  if a route does not exist you can give a component inside the router with 'errorElement' prop will be rendered by RouterProvider component whenever an error occurs during a route 

  There are various types of routers depending on the use cases.

  Sample strucutre of route:
  {
    path: '/urlPath',
    component: <componentToLoad />
  }
*/

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    // Subroutes of any route are specified in the children element of a particular route to provide its sub routes.
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        // To see class based component View About
        element: (
          <Suspense fallback={<RestaurantSummaryShimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId", // : -> it is a notation that is used to mark a variable which can be fetched.
        /*
          when, component is being fetched, in this case say, RestaurantSummary while it is not present and if React tries to show it before it is fetched, that can break our code. To handle this, we wrap the CHUNKED component inside a suspense component so that that <Suspense> component acts as a placeholder while the real component is being loaded and in order to define what would <Suspense> use as a placeholder, it should be defined inside the "fallback" prop of the suspense component.
        */
        element: (
          <Suspense fallback={<RestaurantSummaryShimmer />}>
            <RestaurantSummary />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
    To use the routes they must be provided inside RouterProvider component,
    and our router configuration should be passed as prop to this component with a router argument as shown in the snippet below: 
*/
root.render(<RouterProvider router={appRouter} />);
