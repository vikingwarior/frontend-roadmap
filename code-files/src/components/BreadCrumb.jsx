import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
  <div className="breadCrumb">
    <span><Link to='localhost:1234'>Home</Link></span>  
    <span>/</span>  
    <span><Link to='localhost:1234'>Pune</Link></span>  
    <span>/</span>  
    <span>McDonald's</span>  
  </div>
  );
};

export default BreadCrumb;
