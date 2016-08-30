import React from 'react';

let ModalTableRow = ({vote}) => (
  <tr>
    <td>{vote.From}</td>
    <td>{vote.FromCity}</td>
    <td>{vote.FromState}</td>
    <td>{vote.Body}</td>
  </tr>
)

export default ModalTableRow;