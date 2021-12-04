import React from 'react';
import './Total.css';

const Total = () => {
    return(
<>
<div className="total">
       <div className="list-1">
           <li className="list">Total items</li>
           <li className="list">Total Weight</li>
           <li className="list">Total Order</li>
           <li className="list">Voucher</li>
           <li className="list">Shipping Cost</li>
           <li className="list">Grand Total</li>
       </div>
       <div className="list-2">
           <li className="list">2 item</li>
           <li className="list">2,2000 Gram</li>
           <li className="list">Rp.   360,000</li>
           <li className="list">Rp.         0</li>
           <li className="list">Rp.         0</li>
           <li className="list"><span className="list1">Rp.   360,000</span></li>
       </div>
   </div>
</>
    );
};
export default Total;