import { CDN_URL } from "../utils/constants";

const DealsCarousel = ({ dealsInfo }) => {
  const scrollCarousel = (btnElement) => {
    let cardWidth = document.querySelector(".carouselCard").offsetWidth;
    document.querySelector(".carousel").scrollLeft +=
      btnElement.classList[0] === "prevButton" ? -cardWidth : cardWidth;
  };

  return (
    <div className="dealsCarousel">
      <div className="carouselHeader">
        <h2>Deals for You</h2>
        <div className="navButtons">
          <button
            className="prevButton"
            onClick={() =>
              scrollCarousel(document.querySelector(".prevButton"))
            }
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/664/664866.png"
              alt=""
              className="arrow"
              srcSet=""
            />
          </button>
          <button
            className="nextButton"
            onClick={() =>
              scrollCarousel(document.querySelector(".nextButton"))
            }
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/664/664866.png"
              alt=""
              className="arrow"
              srcSet=""
            />
          </button>
        </div>
      </div>
      <div className="carousel">
        {dealsInfo.map(({ info }) => {
          const { header, couponCode, offerLogo, restId } = info;
          return (
            <div key={`${restId}`} className="carouselCard">
              <img
                src={CDN_URL + offerLogo}
                alt=""
                srcSet=""
                height="48"
                width="48"
              />
              <div className="offerDetails">
                <h2>{header}</h2>
                <h3>{couponCode}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DealsCarousel;
