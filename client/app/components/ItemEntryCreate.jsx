import React from 'react';

let ItemEntryCreate = (props) => (
  <div>
    <form onSubmit={props.submitHandler}>
      <input type='text' placeholder='Write Something' />
      <br />
      <input type='file' />
      <br />
      <input type='submit' />
    </form>  
  </div>
)

export default ItemEntryCreate;  