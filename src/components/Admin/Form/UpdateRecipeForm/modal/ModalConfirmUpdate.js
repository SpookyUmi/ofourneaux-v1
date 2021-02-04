// YARN
import React from 'react';
import './modal.scss';

// component
const ModalConfirmDelete = (props) => (
  <div className="modal">
    Recette modifiée!
    <div className="modal__buttons">
      <button className="modal__button" type="button" onClick={props.hideModal}>Valider</button>
    </div>
  </div>
);

export default ModalConfirmDelete;
