
const restaurants = [
  {
    "info": {
      "id": "213610",
      "name": "Wow! Momo",
      "cloudinaryImageId": "f6de3a8932bc042ca20efc3e20a2b865",
      "locality": "Kothrud",
      "areaName": "Kothrud",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "1776",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4.8,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "4.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "23719",
      "name": "McDonald's",
      "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
      "locality": "JM Road",
      "areaName": "Shivajinagar",
      "costForTwo": "₹400 for two",
      "cuisines": ["Burgers", "Beverages", "Cafe", "Desserts"],
      "avgRating": 4.5,
      "parentId": "630",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "243625",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "Deccan Gymkhana",
      "areaName": "Deccan Gymkhana",
      "costForTwo": "₹400 for two",
      "cuisines": ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      "avgRating": 4.1,
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "20058",
      "name": "SP's Biryani House",
      "cloudinaryImageId": "b2jeywla2n5b8h25ey1p",
      "locality": "Sadashiv Peth",
      "areaName": "Sadashiv Peth",
      "costForTwo": "₹900 for two",
      "cuisines": ["Biryani", "North Indian", "Indian", "Maharashtrian"],
      "avgRating": 4.4,
      "parentId": "192891",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "11887",
      "name": "Samudra Veg",
      "cloudinaryImageId": "b7r9runu5yjkfsl20tri",
      "locality": "Pandurang Colony",
      "areaName": "Erandwane",
      "costForTwo": "₹450 for two",
      "cuisines": ["North Indian", "Chinese", "South Indian"],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "176775",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "29639",
      "name": "Eatsome- Wraps & Rolls",
      "cloudinaryImageId": "e56240a4b58956f47a5a1f8392470fbe",
      "locality": "J.M.Road",
      "areaName": "Shivajinagar",
      "costForTwo": "₹300 for two",
      "cuisines": ["North Indian", "Biryani", "Street Food", "Beverages"],
      "avgRating": 4.2,
      "parentId": "471587",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "62934",
      "name": "LunchBox - Meals and Thalis",
      "cloudinaryImageId": "chs0jbyj2osyqumr1wiu",
      "locality": "Shaniwar Peth",
      "areaName": "Narayan Peth",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "4925",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "5624",
      "name": "Subway",
      "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
      "locality": "BHAMBURDA",
      "areaName": "MOSIAK COMMERCIAL COMPLEX",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "2",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 43,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "35370",
      "name": "Falahaar",
      "cloudinaryImageId": "ynt91kk0vyornubvrdgl",
      "locality": "The pavillion mall",
      "areaName": "Shivajinagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Beverages",
        "Juices",
        "Fast Food",
        "Snacks",
        "Pizzas",
        "Italian",
        "Street Food",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "364",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "13909",
      "name": "Wadeshwar",
      "cloudinaryImageId": "uwny9zuejmpvoznipn3c",
      "locality": "Deccan Gymkhana",
      "areaName": "Deccan Gymkhana",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "South Indian",
        "Street Food",
        "Snacks",
        "Beverages",
        "Healthy Food",
        "Indian"
      ],
      "avgRating": 4.6,
      "parentId": "1770",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-11 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    }
  },
  {
    "info": {
      "id": "5370",
      "name": "Cafe Goodluck",
      "cloudinaryImageId": "jsxy3zkxvxzkuqqpvjgd",
      "locality": "Deccan Gymkhana",
      "areaName": "Deccan Gymkhana",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Snacks",
        "Beverages",
        "Bakery"
      ],
      "avgRating": 4.5,
      "parentId": "6539",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "200980",
      "name": "Irani Cafe",
      "cloudinaryImageId": "lwysdaf2bdkz40mqtjbr",
      "locality": "Prabhat Road",
      "areaName": "Erandwane",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Snacks",
        "Fast Food",
        "Desserts",
        "Beverages",
        "Indian",
        "Street Food"
      ],
      "avgRating": 4.5,
      "parentId": "4057",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-11 23:45:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    }
  },
  {
    "info": {
      "id": "88745",
      "name": "Social",
      "cloudinaryImageId": "pi3nf2zislimt0kla2qh",
      "locality": "Cello Platina",
      "areaName": "F.C. Road",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Chinese",
        "Fast Food",
        "Biryani",
        "Pizzas",
        "Salads",
        "Kebabs",
        "Juices",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "2146",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "305794",
      "name": "Barbeque Nation",
      "cloudinaryImageId": "eizjdmngzyna4mp0xmwm",
      "locality": "Jangali Maharaj Rd",
      "areaName": "Deccan Gymkhana",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 4.1,
      "parentId": "2438",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "394784",
      "name": "Theobroma",
      "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
      "locality": "Shivaji Nagar",
      "areaName": "Shivajinagar",
      "costForTwo": "₹400 for two",
      "cuisines": ["Bakery", "Desserts"],
      "avgRating": 4.6,
      "parentId": "1040",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "155434",
      "name": "The Good Bowl",
      "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
      "locality": "Shanivarpeth",
      "areaName": "Shaniwar Peth",
      "costForTwo": "₹400 for two",
      "cuisines": ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
      "avgRating": 4.3,
      "parentId": "7918",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "33848",
      "name": "The Belgian Waffle Co.",
      "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
      "locality": "JM Road",
      "areaName": "Shivajinagar",
      "costForTwo": "₹200 for two",
      "cuisines": ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      "avgRating": 4.5,
      "parentId": "2233",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  },
  {
    "info": {
      "id": "243172",
      "name": "BOSS Burger",
      "cloudinaryImageId": "zxlwn9pn8ztsba8ehzuu",
      "locality": "FC Road",
      "areaName": "Shivaji Nagar",
      "costForTwo": "₹500 for two",
      "cuisines": ["Burgers", "American", "Fast Food", "Snacks"],
      "avgRating": 4.3,
      "parentId": "8594",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      }
    }
  }
]

export default restaurants;
