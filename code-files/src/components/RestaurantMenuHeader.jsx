const RestaurantMenuHeader = () => {
  return (
    <>
      {function toggleSwitch() {
        const switchElement = document.querySelector(".switch");
        const toggleSwitchElement = document.querySelector(".toggle-switch");

        if (switchElement.classList.contains("toggle-on")) {
          switchElement.classList.remove("toggle-on");
          switchElement.classList.add("toggle-off");
          toggleSwitchElement.style.backgroundColor = "grey";
        } else {
          switchElement.classList.remove("toggle-off");
          switchElement.classList.add("toggle-on");
          toggleSwitchElement.style.backgroundColor = "lime";
        }
      }}
      <div className="restaurantMenuHeading">
        <svg
          version="1.1"
          id="Icons"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32.00 32.00"
          xmlSpace="preserve"
          width="40px"
          height="40px"
          fill="#000000"
          stroke="#000000"
          transform="matrix(1, 0, 0, 1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="1.6640000000000001"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  " .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} ",
              }}
            />{" "}
            <path
              className="st0"
              d="M8,9h15c0.6,0,1,0.4,1,1v18c0,0.6-0.4,1-1,1H9c-0.6,0-1-0.4-1-1V9l11.6-5.3C20.2,3.3,21,3.8,21,4.6V9"
            />{" "}
            <path
              className="st0"
              d="M13.4,12h5.3l1.1,2.7c0.6,1.6,0.2,3.4-1.1,4.6l0,0c-1.5,1.4-3.8,1.4-5.3,0l0,0c-1.3-1.1-1.7-3-1.1-4.6L13.4,12z "
            />{" "}
            <path className="st0" d="M16,23.1c0,1.4-0.9,2.6-2.3,2.9h0h4.6" />{" "}
            <path
              className="st0"
              d="M16,20.3v1.8v1.1c0,1.4,0.9,2.6,2.3,2.9h0"
            />{" "}
          </g>
        </svg>
        <h3>MENU</h3>
      </div>
      <div className="menuHeaderButtons">
        <div className="foodPreferenceToggleContainer">
          <input className="toggleBox veg" type="checkbox" id="check" />
          <label
            htmlFor="check"
            className="checkboxToggle checkboxToggleVeg"
          ></label>
        </div>
      </div>  
    </>
  );
};

export default RestaurantMenuHeader;
