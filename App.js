import React from 'react';
import {createRoot} from 'react-dom/client';
import "./index.css";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="data:image/png;base64,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" alt="logo"/>

            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>  
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )}

    const restaurants= [
                    {
                      "info": {
                        "id": "123456",
                        "name": "Pizza Paradise",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
                        "locality": "MG Road",
                        "areaName": "Central District",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                          "Pizza",
                          "Italian",
                          "Fast Food"
                        ],
                        "avgRating": 4.3,
                        "avgRatingString": "4.3",
                        "totalRatingsString": "10K+ ratings",
                        "veg": false,
                        "sla": {
                          "deliveryTime": 30,
                          "lastMileTravel": 3.5,
                          "slaString": "30 mins"
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "50% OFF",
                          "subHeader": "UPTO ₹100"
                        }
                      }
                    },
                    {
                      "info": {
                        "id": "234567",
                        "name": "Burger Hub",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
                        "locality": "Park Street",
                        "areaName": "Downtown",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                          "Burgers",
                          "American",
                          "Fast Food"
                        ],
                        "avgRating": 4.5,
                        "avgRatingString": "4.5",
                        "totalRatingsString": "15K+ ratings",
                        "veg": false,
                        "sla": {
                          "deliveryTime": 25,
                          "lastMileTravel": 2,
                          "slaString": "25 mins"
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "40% OFF",
                          "subHeader": "UPTO ₹80"
                        }
                      }
                    },
                    {
                      "info": {
                        "id": "345678",
                        "name": "Green Bites",
                        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                        "locality": "Residency Road",
                        "areaName": "South Zone",
                        "costForTwo": "₹250 for two",
                        "cuisines": [
                          "Healthy Food",
                          "Salads",
                          "Vegan"
                        ],
                        "avgRating": 4.7,
                        "avgRatingString": "4.7",
                        "totalRatingsString": "8K+ ratings",
                        "veg": true,
                        "sla": {
                          "deliveryTime": 20,
                          "lastMileTravel": 1.5,
                          "slaString": "20 mins"
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "30% OFF",
                          "subHeader": "UPTO ₹75"
                        }
                      }
                    },
                    {
                      "info": {
                        "id": "456789",
                        "name": "Spice Kingdom",
                        "cloudinaryImageId": "rng/md/carousel/production/indian101",
                        "locality": "Brigade Road",
                        "areaName": "City Center",
                        "costForTwo": "₹500 for two",
                        "cuisines": [
                          "Indian",
                          "North Indian",
                          "Biryani"
                        ],
                        "avgRating": 4.2,
                        "avgRatingString": "4.2",
                        "totalRatingsString": "12K+ ratings",
                        "veg": false,
                        "sla": {
                          "deliveryTime": 35,
                          "lastMileTravel": 4,
                          "slaString": "35 mins"
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "20% OFF",
                          "subHeader": "UPTO ₹50"
                        }
                      }
                    },
                    {
                      "info": {
                        "id": "567890",
                        "name": "Chinese Dragon",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648.jpg",
                        "locality": "Commercial Street",
                        "areaName": "East District",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                          "Chinese",
                          "Asian",
                          "Thai"
                        ],
                        "avgRating": 4.4,
                        "avgRatingString": "4.4",
                        "totalRatingsString": "9K+ ratings",
                        "veg": false,
                        "sla": {
                          "deliveryTime": 28,
                          "lastMileTravel": 2.8,
                          "slaString": "28 mins"
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "60% OFF",
                          "subHeader": "UPTO ₹120"
                        }
                      }
                    },
                    {
                      "info": {
                        "id": "678901",
                        "name": "Dessert Delight",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173.jpg",
                        "locality": "Lavelle Road",
                        "areaName": "West End",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Desserts",
                          "Ice Cream",
                          "Bakery"
                        ],
                        "avgRating": 4.6,
                        "avgRatingString": "4.6",
                        "totalRatingsString": "7K+ ratings",
                        "veg": true,
                        "sla": {
                          "deliveryTime": 22,
                          "lastMileTravel": 1.8,
                          "slaString": "22 mins"
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "25% OFF",
                          "subHeader": "UPTO ₹60"
                        }
                      }
                    },
                    {
                      "info": {
                        "id": "789012",
                        "name": "Sushi Station",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
                        "locality": "Indiranagar",
                        "areaName": "Uptown",
                        "costForTwo": "₹800 for two",
                        "cuisines": [
                          "Japanese",
                          "Sushi",
                          "Asian"
                        ],
                        "avgRating": 4.8,
                        "avgRatingString": "4.8",
                        "totalRatingsString": "5K+ ratings",
                        "veg": false,
                        "sla": {
                          "deliveryTime": 40,
                          "lastMileTravel": 5.2,
                          "slaString": "40 mins"
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "15% OFF",
                          "subHeader": "UPTO ₹150"
                        }
                      }
                    },
                    {
                      "info": {
                        "id": "890123",
                        "name": "South Spice",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
                        "locality": "Jayanagar",
                        "areaName": "South Bangalore",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                          "South Indian",
                          "Dosa",
                          "Idli"
                        ],
                        "avgRating": 4.5,
                        "avgRatingString": "4.5",
                        "totalRatingsString": "11K+ ratings",
                        "veg": true,
                        "sla": {
                          "deliveryTime": 25,
                          "lastMileTravel": 3,
                          "slaString": "25 mins"
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "35% OFF",
                          "subHeader": "UPTO ₹70"
                        }
                      }
                    },
                    {
                      "info": {
                        "id": "901234",
                        "name": "Pasta Palace",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/7bd350a8-55e7-459b-83a2-e250e670d194_14558.JPG",
                        "locality": "Koramangala",
                        "areaName": "Tech Hub",
                        "costForTwo": "₹450 for two",
                        "cuisines": [
                          "Italian",
                          "Pasta",
                          "Continental"
                        ],
                        "avgRating": 4.1,
                        "avgRatingString": "4.1",
                        "totalRatingsString": "6K+ ratings",
                        "veg": false,
                        "sla": {
                          "deliveryTime": 32,
                          "lastMileTravel": 3.8,
                          "slaString": "32 mins"
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "45% OFF",
                          "subHeader": "UPTO ₹90"
                        }
                      }
                    }
                  ]
                
       

    const RestaurantCard=(props)=>{
        
    const {restaurants}=props;
        const {name,cuisines,avgRatingString,sla}=restaurants?.info;  
        return(
            <div className="res-card">
                <img className="res-logo" src="https://tb-static.uber.com/prod/image-proc/processed_images/01180011148bf1c574024c5ce395a9c3/1da9a9e826d15157cea1c5bb8696f248.webp" alt="res-logo"/> 
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>Rating: {avgRatingString}</h4>
                <h2>{sla.slaString}</h2>
            </div>
        )
    }

    const Body=()=>{
        return(
            <div className="body">
                <div className="search">Search</div> 
                <div className="res-container">
                 {restaurants.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.info.id} restaurants={restaurant} />
                 })}
                </div>
            </div>
        )
    }

const AppLayout=()=>{
  return(
    <div className="app">  
    <Header />
    <Body />
        </div>
);
};
const root=createRoot(document.getElementById("root"));
root.render(<AppLayout />);