import { useState } from "react";
import { Link } from "react-router-dom";

import { AUTH_BUTTON_LABEL } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  [CURRENT_AUTH_LABEL, setCurrentAuthLabel] = useState(AUTH_BUTTON_LABEL.login);

  return (
    <div className="header">
      <img src={LOGO_URL} className="logo" />
      <ul className="nav-options">
        <li>Home</li>
        <li>Cart</li>
        <li>
          <Link to="about">About</Link>
        </li>
        <button
          className="auth button"
          onClick={() => {
            authLabel =
              CURRENT_AUTH_LABEL === AUTH_BUTTON_LABEL.login
                ? AUTH_BUTTON_LABEL.logout
                : AUTH_BUTTON_LABEL.login;
            // Calling this method re-renders the entire component
            setCurrentAuthLabel(authLabel);
          }}
        >
          {CURRENT_AUTH_LABEL}
        </button>
      </ul>
    </div>
  );
};

export default Header;
