import React from 'react';

const Template = React.forwardRef((props, ref) => {
  const { receipt, expense } = props;
  let date = new Date();
  return (
    <div ref={ref} style={{display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
            <header className="print_header">
                <h1 className="receipt_title">Spend Adani's Fortune</h1>
                <div style={{display: "flex", justifyContent: "space-between", width: "100vw"}}>
                    <h4>{date.toLocaleString()}</h4>
                    <h4 style={{paddingRight: "10px"}}>Spend Adani's Fortune</h4>
                </div>
            </header>
            <div className="print_body">
                <h1>Receipt</h1>
                {
                    receipt.map((item, index) => {
                    if(item.freq > 0)
                        return <h5 className="receipt-record" key={index}>{item.name} x {item.freq}</h5>
                    })
                }
                <h4 className="receipt-total">Total: ₹ {expense.toLocaleString()}</h4>
            </div>
        </div>
        <footer className="print_footer">
            <h4>Made By: Tanishk</h4>
        </footer>
    </div>
  )
})

export default Template