import React from 'react';
import './App.css';
import App1 from './App1'
import { FaArrowLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function App() {
  return (
    <>
    <div className="main">
      <div className="last"><FaArrowLeft/>Order Information</div>
      <div className="first"><div className="v1">Delivery Address<FaAngleRight/></div>
        <div className="v2">Please Choose your destination method</div></div>
      <div className="second">
        <div>Dropship</div><div class="switch">
    <label>
      <input type="checkbox"/>
      <span class="lever"></span>
    </label>
  </div></div>
      <div className="first">
        <div className="v1">Shipping option<FaAngleRight/></div>
        <div className="v2">Please Choose your shipping method</div>
      </div>
      <div className="first"><div className="v1">Payment option<FaAngleRight/></div>
        <div className="v2">Please Choose your payment method</div></div>
    </div>
    <App1/>
    <div className="last">Finish</div>
    </>
  );
}

export default App;
