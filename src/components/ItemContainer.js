import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import Item from './Item';

const ItemContainer = () => {

  const [restart, setRestart] = useState(true);
  const [items, setItems] = useState([]);
  const items_url = process.env.REACT_APP_SERVER_API;

  const fetchItems = async () => {
    let data = await fetch(items_url);
    data = await data.json();
    setItems(data);
  }

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, [])
  
  const dispatch = useDispatch();
  const {clear} = bindActionCreators(actionCreators, dispatch);

  return (
    <>
    <div className="item-container">
      {items.length>0 && items.map((item, index)=>{
        let cost_in_rs = item.cost * 82.40;
        let rounded_off_cost = Math.round(cost_in_rs/1000)*1000;
        return(
          <Item restart={restart} setRestart={setRestart} key={item.id} image={item.image} name={item.name} cost={rounded_off_cost}/>
        );
      })}
    </div>
    <button className='clear-btn' onClick={()=>{clear(); setRestart(true);}}>Clear Purchases</button>
    </>
  )
}

export default ItemContainer