// YARN
import React from 'react';
import './modalConfirmDelete.scss';

// component
const ModalConfirmDelete = (props) => (
  <div className="modal">
    <h1 className="modal__title">Supprimer l'utilisateur</h1>
    <p className="modal__text">Êtes vous sûr de vouloir supprimer {props.user.first_name} {props.user.last_name}?</p>
    <div className="modal__buttons">
      <button className="modal__button" type="button" onClick={props.deleteUser}>Oui</button>
      <button className="modal__button" type="button" onClick={props.hideModal}>Non</button>
    </div>
  </div>
);

export default ModalConfirmDelete;
