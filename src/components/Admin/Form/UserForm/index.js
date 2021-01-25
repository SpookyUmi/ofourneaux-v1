/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import User from './User';
import 'src/components/Admin/admin.scss';

// TODO add props (controlled field, handle onclick and props)
const UserForm = () => (
  <div className="user__form">

    <form className="user__form__get__user">
      <input className="user__form__get__user__input" type="text" placeholder="Rechercher..." />
      <button className="user__form__get__user__email__button" type="button">Par Email</button>
      <button className="user__form__get__user__id__button" type="button">Par ID</button>
    </form>
    <User />

  </div>
);

UserForm.propTypes = {
  
};

export default UserForm;
