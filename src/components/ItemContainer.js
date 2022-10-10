import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import Item from './Item';

const ItemContainer = () => {

  const [restart, setRestart] = useState(true);
  const [items, setItems] = useState([]);
  const items_url = 'http://localhost:5555/get_items';

  const fetchItems = async () => {
    let data = await fetch(items_url);
    data = await data.json();
    setItems(data);
  }

  useEffect(() => {
    fetchItems();
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
          <Item restart={restart} setRestart={setRestart} key={index} image={`item${index+1}`} name={item.name} cost={rounded_off_cost}/>
        );
      })}
    </div>
    <button className='clear-btn' onClick={()=>{clear(); setRestart(true);}}>Clear Purchases</button>
    </>
  )
}

export default ItemContainer