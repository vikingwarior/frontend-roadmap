import React from "react"; // importing 'React' module from node_modules/react
import ReactDOM from "react-dom/client"; // importing 'ReactDOM' module from node_modules/react
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // Importing Routing configurator for application(createBrowserRouter) and routing configuration provider(RouterProvider)

// Importing components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantSummary from "./components/RestaurantSummary";

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      {/*
          <Outlet> -> used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
       */}
      <Outlet />
    </div>
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
        element: <About />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantSummary />,
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
