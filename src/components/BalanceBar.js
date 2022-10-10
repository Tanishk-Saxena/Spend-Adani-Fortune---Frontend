import React from 'react'
import { useSelector } from 'react-redux'

const BalanceBar = () => {

  const balance = useSelector(state => state.balance);
  const expense = useSelector(state => state.expense);

  return (
    <div className='balance-bar '>
        <div className='balance-remaining'>{`Remaining: ₹${balance.toLocaleString()}`}</div>
        <div className='balance-spent'>{expense===0?"You haven't spent a single ruppee yet! Start Buying!":`You only spent ${(expense/110000000000).toFixed(8)} % of the total!`}</div>
    </div>
  )
}

export default BalanceBar