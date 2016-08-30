import React from 'react';
import ModalTableRow from './ModalTableRow.jsx';

let Modal = ({votes}) => (
  <div id="modal1" className="modal">
    <div className="modal-content">
      <h5>Voter Details</h5>
      <table>
        <thead>
          <tr>
              <th data-field="number">#</th>
              <th data-field="city">City, State</th>
              <th data-field="state">Zip</th>
              <th data-field="vote">Vote</th>              
          </tr>
        </thead>

        <tbody>
          {votes.map((vote) => (
            <ModalTableRow key={vote.id} vote={vote} />
          ))}    
        </tbody>
      </table>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>
) 

export default Modal;