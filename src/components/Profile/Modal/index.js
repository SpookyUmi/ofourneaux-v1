// YARN
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// SCSS
import './styles.scss';

// component
const Modal = ({
  handleConfirmDelete,
  handleCancelDelete,
}) => (
  <div className="modal">
    Êtes vous sûr de vouloir supprimer votre compte ?
    <div className="modal__buttons">
      <button className="modal__button" type="button" onClick={handleConfirmDelete}>Oui</button>
      <button className="modal__button" type="button" onClick={handleCancelDelete}>Non</button>
    </div>
  </div>
);

// PropTypes
Modal.propTypes = {
  handleConfirmDelete: PropTypes.func.isRequired,
  handleCancelDelete: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  // sends delation request to middleware "profile.js"
  handleConfirmDelete: () => {
    dispatch({
      type: 'SEND_DELETE_PROFILE_REQUEST',
      redirect: ownProps.history.push,
    });
  },

  // if the user cancels his deletion request,
  // the action of closing the modal is dispatched
  handleCancelDelete: () => {
    dispatch({
      type: 'CLOSE_MODAL',
    });
  },
});

// eslint-disable-next-line import/no-mutable-exports
let container = connect(null, mapDispatchToProps)(Modal);

container = withRouter(container);

export default container;
