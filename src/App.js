import React, { useEffect } from "react";
import Nav from "./component/Header/Nav";
import './App.css';
import Home from "./component/Home/Home";
import { Routes, Route } from "react-router-dom";
import Basket from "./component/Checkout/Checkout";
import Signup from "./component/SignUp/Signup";
import { useStateValue } from "./component/reducer/ContextProvider";
import {auth} from "./component/Firebase/Config";
import UnknownPage from "./component/404";
import WhiteList from "./component/Whitelist/WhiteList";
import Payment from "./component/Payment/Payment";

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/checkout" element={<Basket />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />      
        <Route path="/*" element={<UnknownPage />} />
        <Route path="/white-lists" element={<WhiteList />} />
        <Route path="/robots.txt" element={<UnknownPage />} />
      </Routes>
    </div>
  );
}

export default App;
