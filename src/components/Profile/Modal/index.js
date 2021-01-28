import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.scss';

const Modal = ({
  handleConfirmDelete,
  handleCancelDelete,
}) => (
  <div className="modal">
    Êtes vous sûr de vouloir supprimer votre compte ?
    <div className="modal__buttons">
      <button className="modal__buttons__confirm" type="button" onClick={handleConfirmDelete}>Oui</button>
      <button className="modal__buttons__cancel" type="button" onClick={handleCancelDelete}>Non</button>
    </div>
  </div>
);

Modal.propTypes = {
  handleConfirmDelete: PropTypes.func.isRequired,
  handleCancelDelete: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleConfirmDelete: () => {
    dispatch({
      type: 'SEND_DELETE_PROFILE_REQUEST',
    });
  },

  handleCancelDelete: () => {
    dispatch({
      type: 'CLOSE_MODAL',
    });
  },
});

export default connect(null, mapDispatchToProps)(Modal);
