const DealsCarousel = () => {
  let offerData = [
    {
      offerInfo: "Free McVeggie Burger",
      offerCode: "NO CODE REQUIRED",
      offerBannerUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
    },

    {
      offerInfo: "Free McVeggie Burger",
      offerCode: "NO CODE REQUIRED",
      offerBannerUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic" 
    },

    {
      offerInfo: "20% Off Upto ₹125",
      offerCode: "USE AMEXMATCHDAY",
      offerBannerUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/4/4/a0b7cb44-dab7-4128-9fd7-7b59aab0ab6c_AMEX.png" 
    },

    {
      offerInfo: "15% Off Upto ₹150",
      offerCode: "USE HSBCFEST",
      offerBannerUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/4/4/ea942094-65ec-4248-9c59-778823fffddb_HSBC.png" 
    },

    {
      offerInfo: "15% Off Upto ₹300",
      offerCode: "USE CITIFOODIE",
      offerBannerUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/4/4/7806e2f2-5e05-49de-a59f-8b27212b816f_Citi.png" 
    },
  ];

  const scrollCarousel = (btnElement) => {
    document.querySelector(".carousel").scrollLeft =
      btnElement.classList[0] === "prevButton"
        ? -btnElement.offsetWidth
        : btnElement.offsetWidth;
  };

  return (
    <div className="dealsCarousel">
      <div className="carouselHeader">
        <h2>Deals for You</h2>
        <div className="navButtons">
          <button className="prevButton" onClick={() => scrollCarousel(document.querySelector(".prevButton"))}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/664/664866.png"
              alt=""
              className="arrow"
              srcset=""
            />
          </button>
          <button className="nextButton" onClick={() => scrollCarousel(document.querySelector(".nextButton"))}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/664/664866.png"
              alt=""
              className="arrow"
              srcset=""
            />
          </button>
        </div>
      </div>
      <div className="carousel">{offerData.map(({ offerInfo, offerCode, offerBannerUrl}) => {
        return (
          <div className="carouselCard">
            <img
              src={offerBannerUrl}
              alt=""
              srcset=""
              height="48"
              width="48"
            />
            <div className="offerDetails">
              <h2>{offerInfo}</h2>
              <h3>{offerCode}</h3>
            </div>
          </div>
        );
      })}</div>
    </div>
  );
};

export default DealsCarousel;
