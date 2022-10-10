import React from 'react';
import image from '../images/gautam-adani.jpg';
import { useSelector } from 'react-redux';


const Header = () => {

  const balance = useSelector(state => state.balance);

  return (
    <header>
       <img src={image} alt="" />

       <h1 className="title">Spend Gautam Adani's Fortune!</h1>

       <div className='about'>If Mr. Gautam Adani cashed out all of his stocks & assets today he would have
approximately <strong style={{fontWeight: "900", color: "rgba(0,0,0,0.9)"}}>₹{balance.toLocaleString()}</strong> (11 Lakh Crore Indian Rupees) in his bank account.</div>

        <div className="challenge">
            <p>If you had that much money, how would <strong style={{fontWeight: "900", color: "rgba(0,0,0,0.9)"}}>you spend it</strong>?</p>
            <p>Have your receipt at the end!</p>
        </div>
    </header>
  )
}

export default Header