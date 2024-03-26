import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <div className="breadCrumb">
      <div className="breadCrumb-container">
        <span className="breadCrumb-item">
          <Link to="/">Home/ </Link>
        </span>
        <span className="breadCrumb-item">
          <Link to="/restaurants">Restaurants/ </Link>
        </span>
        <span className="breadCrumb-item">New Restaurant</span>
      </div>
    </div>
  );
};

export default BreadCrumb;
