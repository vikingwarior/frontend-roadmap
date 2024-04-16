/*
    useRouteError -> Hook provided by react-router-dom that fetches the error details in case of a route error.
 */
import { useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status } = useRouteError();
  console.log();
  return (
    <div>
      <h1>Oops!! Seems like you encountered an error</h1>
      <h2>Error Message :</h2>
      <h3>Status : {status}</h3>
      <h3>Message : {error?.message}</h3>
    </div>
  );
};

export default Error;
