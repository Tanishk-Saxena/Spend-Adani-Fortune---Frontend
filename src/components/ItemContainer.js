import React from 'react'
import Item from './Item'
import image from '../gautam-adani.jpg'

const setState = () => {}

const ItemContainer = () => {
  return (
    <div className="item-container">
        <Item image={image} name={"name"} price={"price"} state={0} setState={setState}/>
        <Item image={image} name={"name"} price={"price"} state={0} setState={setState}/>
        <Item image={image} name={"name"} price={"price"} state={0} setState={setState}/>
        <Item image={image} name={"name"} price={"price"} state={0} setState={setState}/>
        <Item image={image} name={"name"} price={"price"} state={0} setState={setState}/>
        <Item image={image} name={"name"} price={"price"} state={0} setState={setState}/>
        <Item image={image} name={"name"} price={"price"} state={0} setState={setState}/>
        <Item image={image} name={"name"} price={"price"} state={0} setState={setState}/>
        <Item image={image} name={"name"} price={"price"} state={0} setState={setState}/>
        <Item image={image} name={"name"} price={"price"} state={0} setState={setState}/>
    </div>
  )
}

export default ItemContainer