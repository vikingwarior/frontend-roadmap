const CORS_PROXY_URL = 'https://api.allorigins.win/get?url=';

const getCorsURL= (URL) => `https://api.allorigins.win/get?url=${encodeURIComponent(URL)}` 

export const API_URL = {
    GET: `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,

    POST: `https://www.swiggy.com/dapi/restaurants/list/update`
};

export const RESTAURANT_SUMMARY_DATA_API_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.56&lng=73.95&restaurantId="

export const AUTH_BUTTON_LABEL = {
    login : "Login",
    logout : "Logout"
};

export const CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;

export const LOGO_URL = `https://i.postimg.cc/brPKShpN/Designer.png`;