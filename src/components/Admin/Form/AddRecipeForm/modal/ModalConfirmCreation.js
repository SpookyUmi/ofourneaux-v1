// YARN
import React from 'react';
import './modalConfirmCreation.scss';

// component
const ModalConfirmDelete = (props) => (
  <div className="modal">
    Recette crée!
    <div className="modal__buttons">
      <button className="modal__button" type="button" onClick={props.hideModal}>Valider</button>
    </div>
  </div>
);

export default ModalConfirmDelete;
