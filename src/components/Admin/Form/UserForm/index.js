/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import User from './User';
import 'src/components/Admin/admin.scss';

// TODO add props (controlled field, handle onclick and props)
const UserForm = ({
  userSearchField, updateUserSearchField, searchByEmail, searchById,
}) => (
  <div className="user__form">

    <form className="user__form__get__user">
      <input
        className="user__form__get__user__input"
        type="text"
        placeholder="Rechercher..."
        value={userSearchField}
        onChange={updateUserSearchField}
      />
      {/* <button
        className="user__form__get__user__email__button"
        type="button"
        onClick={searchByEmail}
      >Par Email
      </button> */}
      <button
        className="user__form__get__user__id__button"
        type="button"
        onClick={searchById}
      >Par ID
      </button>
    </form>
    <User />

  </div>
);

UserForm.propTypes = {
  userSearchField: PropTypes.string.isRequired,
  updateUserSearchField: PropTypes.func.isRequired,
  searchByEmail: PropTypes.func.isRequired,
  searchById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userSearchField: state.admin.userSearchField,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserSearchField: (event) => {
    dispatch({
      type: 'UPDATE_USER_SEARCH_FIELD',
      payload: {
        userSearchField: event.target.value,
      },
    });
  },

  searchByEmail: () => {
    dispatch({
      type: 'GET_USER_BY_EMAIL',
    });
  },

  searchById: () => {
    dispatch({
      type: 'GET_USER_BY_ID',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
