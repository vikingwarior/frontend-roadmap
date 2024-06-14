import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AUTH_BUTTON_LABEL } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Header = () => {
  [CURRENT_AUTH_LABEL, setCurrentAuthLabel] = useState(AUTH_BUTTON_LABEL.login);

  const {userNameValue: userName} = useContext(UserContext);

  return (
    <div className="header">
      <img src={LOGO_URL} className="logo" />
      <ul className="nav-options">
      <li>Welcome : <span className="text-fuchsia-500">{userName}</span></li>
        <li><Link to="../../">Home</Link></li>
        <li><Link to="../../Cart">Cart</Link></li>
        <li>
          {/*
            
            <Link /> ->
            react-router-dom component that acts a link to  asynchronusly load the link without a refresh unlike an <a /> tag which requires a reload to opern the target link.
          
          */}
          <Link to="../../about">About</Link>{/*To see how a context can be used in class based componet open <DevCard/> inside <About /> component*/}
        </li>
      </ul>
    </div>
  );
};

export default Header;
