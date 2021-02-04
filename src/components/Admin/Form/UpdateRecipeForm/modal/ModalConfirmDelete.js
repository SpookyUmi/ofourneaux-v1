import React from 'react';
import './modal.scss';

// component
const ModalConfirmDelete = (props) => (
  <div className="modal">
    <h1>Supprimer une recette</h1>
    <p>Êtes vous sûr de vouloir supprimer cette recette?</p>
    <div className="modal__buttons">
      <button className="modal__button" type="button" onClick={props.deleteRecipe}>Oui</button>
      <button className="modal__button" type="button" onClick={props.hideModal}>Non</button>
    </div>
  </div>
);

export default ModalConfirmDelete;
