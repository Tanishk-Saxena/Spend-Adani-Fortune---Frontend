import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { actionCreators, receiptActionCreators } from '../state/index'
import { bindActionCreators } from 'redux';

const Item = ({image, name, cost, setRestart, restart}) => {
  
  const [state, setState] = useState(0);
  const dispatch = useDispatch();
  const {buy, sell} = bindActionCreators(actionCreators, dispatch);
  const {add, remove} = bindActionCreators(receiptActionCreators, dispatch);
  useEffect(() => {
    if(restart===true){
      setState(0);
    }
  }, [restart])
  return (
    <>
    <div className='item'>
        <img src={require(`../images/${image}`)} alt="image description" />
        <p className="name">{name}</p>
        <p className="price">₹ {cost.toLocaleString()}</p>
        <div className='button-row'>
            <div className='button sell' onClick={()=>{if(state!==0){setState(state-1);sell(cost);remove(name);}}}>Sell</div>
            <p>{state}</p>
            <div className='button buy' onClick={()=>{setRestart(false);setState(state+1);buy(cost);add(name);}}>Buy</div>
        </div>
    </div>
    </>
  )
}

export default Item