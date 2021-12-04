import React from "react";
import './App.css';
import img from './pillow.jpeg';
import Total from './Total';


const App1 = () =>{
 return(
   <>
   <div class="order">
       <h3 className="header">Order Detail</h3>
      <div class="detail">
       <img  src={img} className="img" />
       <div className="items">
           <div className="item1"> ORIZINAL XYZONE BRAND TR1255</div>
           <div className="item2"> Variance:RED 40</div>
           <div className="item3">1 PCS(1,100GR)@ <span className="one">Rp. 100,000</span></div>
       </div></div>
       <input type="text" placeholder="Optional message here" className="input"></input> 
       
       <div class="detail">
       <div><img src={img} className="img"/></div>
       <div className="items">
           <div className="item1"> ORIZINAL XYZONE BRAND TR1255</div>
           <div className="item2"> Variance:RED 40</div>
           <div className="item3">1 PCS(1,100GR)@ <span className="one">Rp. 100,000</span></div>
       </div></div>
       <input type="text" placeholder="Optional message here" className="input"></input> 
   </div>
  <Total/>
   <div className="voucher">
       <div className="v4">Voucher Code</div>
       <div className="v5">Apply</div>
   </div>
 
   <div class="normal"><input
          type="checkbox" class="check"
        />with Payment ,I agree with terms & condition</div>
   </>
 );
};
export default App1;