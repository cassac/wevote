import React from 'react';

let ItemEntryCreate = (props) => (
  <div>
    <form onSubmit={props.submitHandler}>
      <input name='text' type='text' placeholder='Write Something' />
      <br />
      <input name='image' type='file' />
      <br />
      <input type='submit' />
    </form>  
  </div>
)

export default ItemEntryCreate;  