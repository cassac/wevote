import React from 'react';

let ItemEntry = ({item}) => (
<div className="col s6">
  <div className="card horizontal">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={item.filepath} />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">
        #{item.tag}<i className="material-icons right">more_vert</i>
      </span>
      <div>
        <a href="#">{item.text}</a>
      </div>
      <h1>{item.votes}</h1>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">#{item.tag}<i className="material-icons right">close</i></span>
      <p>{item.text}</p>
    </div>
  </div> 
</div>
) 

export default ItemEntry;