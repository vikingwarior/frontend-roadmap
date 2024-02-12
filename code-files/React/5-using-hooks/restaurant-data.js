
const restaurants = [
  {
    "info": {
      "id": "213610",
      "name": "Wow! Momo",
      "cloudinaryImageId": "f6de3a8932bc042ca20efc3e20a2b865",
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
      "slaString": "35-40 mins",
    }
  },
  {
    "info": {
      "id": "23719",
      "name": "McDonald's",
      "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
      "costForTwo": "₹400 for two",
      "cuisines": ["Burgers", "Beverages", "Cafe", "Desserts"],
      "avgRating": 4.5,
      "parentId": "630",
      "slaString": "25-30 mins",
    }
  },
  {
    "info": {
      "id": "243625",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "costForTwo": "₹400 for two",
      "cuisines": ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      "avgRating": 4.1,
      "parentId": "547",
      "slaString": "25-30 mins",
    }
  },
  {
    "info": {
      "id": "20058",
      "name": "SP's Biryani House",
      "cloudinaryImageId": "b2jeywla2n5b8h25ey1p",
      "costForTwo": "₹900 for two",
      "cuisines": ["Biryani", "North Indian", "Indian", "Maharashtrian"],
      "avgRating": 4.4,
      "parentId": "192891",
      "slaString": "30-35 mins",
    }
  },
  {
    "info": {
      "id": "11887",
      "name": "Samudra Veg",
      "cloudinaryImageId": "b7r9runu5yjkfsl20tri",
      "costForTwo": "₹450 for two",
      "cuisines": ["North Indian", "Chinese", "South Indian"],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "176775",
      "slaString": "30-35 mins",
    }
  },
  {
    "info": {
      "id": "29639",
      "name": "Eatsome- Wraps & Rolls",
      "cloudinaryImageId": "e56240a4b58956f47a5a1f8392470fbe",
      "costForTwo": "₹300 for two",
      "cuisines": ["North Indian", "Biryani", "Street Food", "Beverages"],
      "avgRating": 4.2,
      "parentId": "471587",
      "slaString": "25-30 mins",
    }
  },
  {
    "info": {
      "id": "62934",
      "name": "LunchBox - Meals and Thalis",
      "cloudinaryImageId": "chs0jbyj2osyqumr1wiu",
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
      "slaString": "35-40 mins",
    }
  },
  {
    "info": {
      "id": "5624",
      "name": "Subway",
      "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
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
      "slaString": "40-45 mins",
    }
  },
  {
    "info": {
      "id": "35370",
      "name": "Falahaar",
      "cloudinaryImageId": "ynt91kk0vyornubvrdgl",
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
      "slaString": "25-30 mins",
    }
  },
  {
    "info": {
      "id": "13909",
      "name": "Wadeshwar",
      "cloudinaryImageId": "uwny9zuejmpvoznipn3c",
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
      "slaString": "30-35 mins",
    }
  },
  {
    "info": {
      "id": "5370",
      "name": "Cafe Goodluck",
      "cloudinaryImageId": "jsxy3zkxvxzkuqqpvjgd",
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
      "slaString": "25-30 mins",
    }
  },
  {
    "info": {
      "id": "200980",
      "name": "Irani Cafe",
      "cloudinaryImageId": "lwysdaf2bdkz40mqtjbr",
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
      "slaString": "25-30 mins",
    }
  },
  {
    "info": {
      "id": "88745",
      "name": "Social",
      "cloudinaryImageId": "pi3nf2zislimt0kla2qh",
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
      "slaString": "35-40 mins",
    }
  },
  {
    "info": {
      "id": "305794",
      "name": "Barbeque Nation",
      "cloudinaryImageId": "eizjdmngzyna4mp0xmwm",
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
      "slaString": "30-35 mins",
    }
  },
  {
    "info": {
      "id": "394784",
      "name": "Theobroma",
      "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
      "costForTwo": "₹400 for two",
      "cuisines": ["Bakery", "Desserts"],
      "avgRating": 4.6,
      "parentId": "1040",
      "slaString": "25-30 mins",
    }
  },
  {
    "info": {
      "id": "155434",
      "name": "The Good Bowl",
      "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
      "costForTwo": "₹400 for two",
      "cuisines": ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
      "avgRating": 4.3,
      "parentId": "7918",
      "slaString": "25-30 mins",
    }
  },
  {
    "info": {
      "id": "33848",
      "name": "The Belgian Waffle Co.",
      "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
      "costForTwo": "₹200 for two",
      "cuisines": ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      "avgRating": 4.5,
      "parentId": "2233",
      "slaString": "30-35 mins",
    }
  },
  {
    "info": {
      "id": "243172",
      "name": "BOSS Burger",
      "cloudinaryImageId": "zxlwn9pn8ztsba8ehzuu",
      "costForTwo": "₹500 for two",
      "cuisines": ["Burgers", "American", "Fast Food", "Snacks"],
      "avgRating": 4.3,
      "parentId": "8594",
      "slaString": "30-35 mins",
    }
  }
]

export default restaurants;
