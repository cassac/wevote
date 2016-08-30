import React from 'react';

let ItemEntryCreate = (props) => (
  <div className='row'>
    <form className="col s12" onSubmit={props.submitHandler}>
        <div className='row'>    
          <div className='input-field col s6'>
            <input name='text' type='text' placeholder='Title' required/>
          </div>
          <div className="file-field input-field col s4">
            <div className="btn white black-text">
              <span>File</span>
                <input name='image' type='file' />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type='text' placeholder='Attach an image' />
            </div>
          </div>
          <div className='input-field col s2'>
            <input className="btn waves-effect waves-light white black-text" type='submit' />
          </div>  
        </div>
    </form>  
  </div>
)

export default ItemEntryCreate;  