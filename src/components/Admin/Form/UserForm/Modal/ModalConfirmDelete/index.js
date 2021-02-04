// YARN
import React from 'react';
import './modalConfirmDelete.scss';

// component
const ModalConfirmDelete = (props) => (
  <div className="modal">
    Êtes vous sûr de vouloir supprimer {props.user.first_name} {props.user.last_name}?
    <div className="modal__buttons">
      <button className="modal__button" type="button" onClick={props.deleteUser}>Oui</button>
      <button className="modal__button" type="button" onClick={props.hideModal}>Non</button>
    </div>
  </div>
);

export default ModalConfirmDelete;
