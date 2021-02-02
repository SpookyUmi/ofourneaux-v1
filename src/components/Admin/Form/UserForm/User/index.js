/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import 'src/components/Admin/admin.scss';

const User = ({
  user, makeAdmin, makeNonAdmin, deleteUser,
}) => (
  <div className="user">
    <img className="user__image" href={user.image} alt="utilisateur" />
    <div className="user__description">
      <div className="user__description__name">{user.firstName}" "{user.lastName}</div>
      <div className="user__description__email">{user.email}</div>
      <div className="user__description__id">{user.id}</div>
    </div>
    <div className="user__buttons">
      {user.status === 'utilisateur'
      && (
      <button
        className="user__buttons__status"
        type="button"
        onClick={makeAdmin}
      >Donner le statut administrateur
      </button>
      )}
      {user.status === 'administrateur'
      && (
      <button
        className="user__buttons__status"
        type="button"
        onClick={makeNonAdmin}
      >Retirer le statut administrateur
      </button>
      )}
      <button
        className="usser__buttons__delete"
        type="button"
        onClick={deleteUser}
      >Supprimer l'utilisateur
      </button>
    </div>
    <div className="user__status">{user.status}</div>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  makeAdmin: PropTypes.func.isRequired,
  makeNonAdmin: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.admin.user,
});

const mapDispatchToProps = (dispatch) => ({
  makeAdmin: () => {
    dispatch({
      type: 'MAKE_ADMIN',
    });
  },

  makeNonAdmin: () => {
    dispatch({
      type: 'MAKE_NON_ADMIN',
    });
  },

  deleteUser: () => {
    dispatch({
      type: 'DELETE_USER',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
