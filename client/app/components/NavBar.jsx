import React from 'react';

let NavBar= ({clickHandler}) => (
  <div>
    <nav>
      <div className="nav-wrapper blue darken-1">
         <a href="#!" className="brand-logo center"><i className="material-icons">person_pin</i>WeVote</a>
         <ul id="nav-mobile" className="left">
           <li>
            <a href="#" className="tooltipped" data-position="right" data-delay="50" 
              data-tooltip="Send text to (415) 766-9520. Example: #HASHTAG I like voting!">
              <i className="material-icons">textsms</i>
            </a>
        </li>
         </ul>
        <ul id="nav-mobile" className="right">
          <li onClick={clickHandler}><a href="#"><i className="material-icons">insert_chart</i></a></li>
        </ul>
      </div>
    </nav>
  </div>
) 

export default NavBar;