import React from 'react';

let NavBar= ({clickHandler}) => (
  <div>
    <nav>
      <div className="nav-wrapper">
         <a href="#!" className="brand-logo center"><i className="material-icons">person_pin</i>WeVote</a>
        <ul id="nav-mobile" className="right">
          <li onClick={clickHandler}><a href="#"><i className="material-icons">insert_chart</i></a></li>
        </ul>
      </div>
    </nav>
  </div>
) 

export default NavBar;