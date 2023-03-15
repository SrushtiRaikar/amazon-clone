import React from "react";
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket}, dispatch]= useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.featuredproductsusa.com/wp-content/uploads/2019/10/ocean_credit02-1024x256.png"
          alt=""
        />

        <div>
          {/* <h3>Hello,{user.email}</h3> */}
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item=>(
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
{/* checkout product */}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
       
      </div>
    </div>
  );
}

export default Checkout;



// import React from 'react'
// import './Checkout.css'
// import CheckoutProduct from './CheckoutProduct';
// import Subtotal from './Subtotal'
// import { useStateValue } from './StateProvider';

// const Checkout = () => {
//   const [{basket, user}, dispatch]=useStateValue();
//   return (
//     <div className="checkout">
//         {/* <h1>Smash the link button</h1> */}
//         <div className="checkout__left">
//           <img className="checkout__ad"
//           src="ocean_credit.png" alt=" "/>

//           <div>
//             {/* <h3>Hello, {user.email}</h3> */}
//             <h2 className="checkout__title">Your shopping Basket</h2>

//             {basket.map(item=>(
//             <CheckoutProduct
//             id={item.id}
//             title={item.title}
//             image={item.image}
//             price={item.price}
//             rating={item.rating}
//             />
//           ))}
//           </div>

//           </div>
//           <div className="checkout__right">
//             <Subtotal/>
           

         
//         </div>
//      </div>
//   )
// }

// export default Checkout