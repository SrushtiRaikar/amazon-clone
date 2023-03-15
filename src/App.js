import  React, { useEffect } from 'react';

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"



const promise= loadStripe(
  "pk_test_51MlRLkSCS3I4dwntO0jSber7qnm1lNPber2l1LGxNUKwNdEw4diarIgeiUN9SOYOdFPlDfiNmWiy50zVS42EoYnx00yJyOI1cU"
);

function App() {
  const [{}, dispatch]= useStateValue();
  useEffect(()=>{
    // will only run once when the app comp loads
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>> ', authUser);
      if (authUser){
        // user just logged in
    dispatch({
            type: 'SET_USER',
            user: authUser
          })
      
    }else{
      // user just logged out
      dispatch({
        type: 'SET_USER',
        user:null
      })

    }
    
   })
  },[])

  return (
  <>
      <div className="App">
      
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<><Header/><Home/></>}/>
        
        <Route path="/checkout" element={<> <Header/><Checkout/></>}/>
        <Route path="/payment" element={<> <Header/><Elements stripe={promise}><Payment/></Elements></>}/>
        </Routes>
      </div>
      </>
  );
}

export default App;



// import "./App.css";
// import Header from "./Header.js";
// import Home from "./Home.js";
// import { Route,Routes } from "react-router-dom";
// import Checkout from "./Checkout";
// import Login from "./Login";


// function App() {
//   return (
//     <>
//        <div className="App">
          
//           <Routes>
//           <Route path="/" element={ <><Header/><Home /></>}/>

//             <Route path="/login" element={<Login/>}/>

//           <Route path="/checkout" element={<> <Header/><Checkout /></>}/>
//           </Routes>
           
         
//         </div>
//     </>
//   )
// }

// export default App