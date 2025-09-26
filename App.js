import React from "react";
import ReactDOM from "react-dom/client";
/*

 Header
  *Logo
  *NavItems
 Body
      -Search
      -Retaurant container
        -Restro card
          -Img
          -Name Of the Res , Star Rating, Cuisine, delivery time
 Foooter
    -Copyrights
    -Links
    -Address
    -Contact
*/

const restaurants = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "491475",
      "name": "Chinese Wok",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "locality": "Ameerpet",
      "areaName": "Gachibowli",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "61955",
      "avgRatingString": "4.2",
      "totalRatingsString": "4.1K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-26 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹119"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
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
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.5",
          "ratingCount": "124"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-27445590-ae25-491e-ad32-ab9433de4632"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/chinese-wok-ameerpet-gachibowli-rest491475",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "81962",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/4b9677ef-913c-434a-9299-b5bf85a8cc91_81962.JPG",
      "locality": "SR Nagar",
      "areaName": "SR Nagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.1,
      "parentId": "721",
      "avgRatingString": "4.1",
      "totalRatingsString": "19K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-27 01:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
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
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "1.9K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-27445590-ae25-491e-ad32-ab9433de4632"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/pizza-hut-sr-nagar-rest81962",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "376914",
      "name": "Theobroma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/47a7f123-aef1-401d-96ea-2c7d2ea19cf7_376914.JPG",
      "locality": "Somajiguda",
      "areaName": "Somajiguda",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "1040",
      "avgRatingString": "4.6",
      "totalRatingsString": "4.6K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-27 00:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
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
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "355"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-27445590-ae25-491e-ad32-ab9433de4632"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/theobroma-somajiguda-rest376914",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "24615",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/32c42e93-29e5-44a2-9e6e-ca269989587b_24615.JPG",
      "locality": "Opposite To Canara Bank",
      "areaName": "Jubilee Hills",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "2456",
      "avgRatingString": "4.5",
      "totalRatingsString": "34K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-26 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹69"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
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
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-27445590-ae25-491e-ad32-ab9433de4632"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/dominos-pizza-opposite-to-canara-bank-jubilee-hills-rest24615",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "767186",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/e31c3db8-3e10-4280-9249-539897f9bb85_767186.jpg",
      "locality": "Ameerpet",
      "areaName": "Secunderabad",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.2,
      "parentId": "166",
      "avgRatingString": "4.2",
      "totalRatingsString": "7.0K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-27 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹39"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
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
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-27445590-ae25-491e-ad32-ab9433de4632"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/burger-king-ameerpet-secunderabad-rest767186",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "341479",
      "name": "Starbucks Coffee",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/3ba1df60-1e21-4487-b23c-4d01163b0c1c_341479.JPG",
      "locality": "Road Number 2",
      "areaName": "Banjara Hills",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream"
      ],
      "avgRating": 4.5,
      "parentId": "195515",
      "avgRatingString": "4.5",
      "totalRatingsString": "935",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-26 19:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
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
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-27445590-ae25-491e-ad32-ab9433de4632"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/starbucks-coffee-road-number-2-banjara-hills-rest341479",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "475665",
      "name": "BOX8 - Desi Meals",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/0488ab1f-93e5-44ee-97d3-92f8a5f842d2_475665.jpg",
      "locality": "Maruthi  Nagar",
      "areaName": "Yousufguda",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Thalis",
        "Home Food"
      ],
      "avgRating": 4.4,
      "parentId": "10655",
      "avgRatingString": "4.4",
      "totalRatingsString": "3.8K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-27 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Mughlai.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Mughlai.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹109"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
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
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-27445590-ae25-491e-ad32-ab9433de4632"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/box8-desi-meals-maruthi-nagar-yousufguda-rest475665",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "62189",
      "name": "Ibaco",
      "cloudinaryImageId": "lr4bcs9ofsbfjiga9ylp",
      "locality": "Next Galleria Mall",
      "areaName": "Panjagutta",
      "costForTwo": "₹800 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "3481",
      "avgRatingString": "4.7",
      "totalRatingsString": "2.8K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-27 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
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
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-27445590-ae25-491e-ad32-ab9433de4632"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/ibaco-next-galleria-mall-panjagutta-rest62189",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  const { id, name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } = props.resData
  return (
    <div className="res-card" >
      <img className="res-logo" alt="res-logo" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>

    </div>
  )
}
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  )
}
const AppLayout = () => {

  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
