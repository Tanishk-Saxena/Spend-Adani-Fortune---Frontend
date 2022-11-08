import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import Template from './Template';

const Receipt = () => {

  const receipt = useSelector(state => state.receipt);
  const expense = useSelector(state => state.expense);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })
  
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
      <div className="template">
        <Template ref={componentRef} receipt={receipt} expense={expense}/>
      </div>
      <button disabled={expense===0?true:false} onClick={handlePrint} className="receipt-btn">Print Receipt</button>
    </div>
  )
}

export default Receipt