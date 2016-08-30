import React from 'react';

let ItemEntry = ({item}) => (
  <div>
      <span>#{item.tag} - {item.votes} - {item.text} - {item.filepath}</span> 
  </div>
) 

export default ItemEntry;