import React from 'react';
import ItemEntry from './ItemEntry.jsx';
let ItemList = (props) => (
  <div className='row'>
    {props.items.map((item) => (
      <ItemEntry key={item.id} item={item} />
      ))}
  </div>
)

export default ItemList;