import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <div className="breadCrumb">
      <span>
        <Link to="../../">Home</Link>
      </span>
      <span>/</span>
      <span>
        <Link to="../../">Pune</Link>
      </span>
      <span>/</span>
      <span>McDonald's</span>
    </div>
  );
};

export default BreadCrumb;
