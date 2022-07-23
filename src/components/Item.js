import React from 'react';

const Item = ({image, name, price, state, setState}) => {
  return (
    <>
    <div className='item'>
        <img src={image} alt="" />
        <p className="name">{name}</p>
        <p className="price">{price}</p>
        <div className='button-row'>
            <div className='button sell'>Sell</div>
            <p>{state}</p>
            <div className='button buy'>Buy</div>
        </div>
    </div>
    </>
  )
}

export default Item