// YARN
import React from 'react';
import './modal.scss';

// component
const ModalConfirmDelete = (hideModal) => (
  <div className="modal">
    <h1>Recette créée!</h1>
    <div className="modal__buttons">
      <button className="modal__button" type="button" onClick={hideModal}>Valider</button>
    </div>
  </div>
);

export default ModalConfirmDelete;
