import React from 'react';
import { useSelector } from 'react-redux';

const Receipt = () => {

  const receipt = useSelector(state => state.receipt);
  const expense = useSelector(state => state.expense);
  
  return (
    <div className="receipt">
      <h1>Receipt</h1>
      {
        receipt.map((item, index) => {
          if(item.freq > 0)
            return <h5 className="receipt-record" key={index}>{item.name} x {item.freq}</h5>
        })
      }
      {expense!==0?<h4 className="receipt-total">Total: ₹ {expense.toLocaleString()}</h4>:''}
      <button className="receipt-btn">Print Receipt</button>
    </div>
  )
}

export default Receipt