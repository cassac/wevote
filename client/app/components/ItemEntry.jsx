import React from 'react';

let ItemEntry = ({item}) => (
<div className="col s6">
  <div className="card small horizontal">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="http://placehold.it/100x100" />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">#{item.tag}<i className="material-icons right">more_vert</i></span>
      <p><a href="#">{item.text}</a></p>
      <p>{item.votes}</p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">#{item.tag}<i className="material-icons right">close</i></span>
      <p>{item.text}</p>
    </div>
  </div> 
</div>
) 

export default ItemEntry;