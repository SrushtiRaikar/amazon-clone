import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="bgimg.jfif" alt="" />

        <div className="home__row">
            <Product 
            id="12321341"
            title="The lean startup: How Constant Innovation Creates Radically Successful Business Paperback"
            price={29.99}
            image="https://th.bing.com/th/id/OIP.uoID0lUaYA-O7NGAUmNb1gAAAA?w=203&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            rating={5}
            />
            <Product 
             id="49538094"
             title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater , Dough Hook and Whisk, 5 Litre Glass Bowl"
             price={239.0}
             image="https://th.bing.com/th/id/OIP.Oqix_DKFlgcqOLhHQgVWOgHaJ4?w=150&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
             rating={3}
            />
        </div>

        <div className="home__row">
        <Product
         id="4903850"
         title="Fire-Boltt Visionary 1.78 AMOLED Bluetooth Calling Smartwatch with  Pixel Resolution"
         price={199.99} 
         image="https://m.media-amazon.com/images/I/61uUuRZ8yuL._SY450_.jpg"
         rating={3}
        />
        <Product
          id="23445930"
          title="Amazon Echo(3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
          price={98.99}
          image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX522_.jpg"
          rating={4}
        />
        <Product
        id="3254354345"
        title="New Apple iPad Pro(12.9-inch, Wi-Fi, 128GB)- Silver (4th Generation)"
        price={598.99}
        image="https://th.bing.com/th/id/OIP.vpOEDW5QnWc_nk0MGfWgdgHaG7?w=187&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        rating={4}
        />
        </div>

        <div className="home__row">
        <Product
        id="90829332"
        title="Samsung Curved LED Gaming Monitor - Super ultra wide WQHD5120x1440"
        price={1094.98}
        image="https://i.gadgets360cdn.com/large/samsung_odyssey_neo_g9_1627375145394.jpg" 
        rating={4}
        />
        </div>
      </div>
    </div>
  );
}

export default Home;
