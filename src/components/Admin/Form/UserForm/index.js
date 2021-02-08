/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import URL from 'src/middlewares/urlEnv';
import axios from 'axios';
import 'src/components/Admin/admin.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ModalConfirmDelete from './Modal/ModalConfirmDelete';
import ModalUpdateUser from './Modal/ModalUpdateUser';

import './userForm.scss';

const UserForm = ({ userToken }) => {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
  const [modalUpdateUser, setModalUpdateUser] = useState(false);

  const getUsers = async () => {
    await axios({
      method: 'get',
      url: `${URL}/users`,
      headers: { authorization: userToken, 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        setUsers(response.data.data.users);
      })
      .catch((error) => {
        console.log('Erreur connexion :', error);
      });
  };

  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
  });

  const deleteUser = async () => {
    await axios({
      method: 'delete',
      url: `${URL}/users/${userSelected.id}`,
      headers: { authorization: userToken, 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        if (response.status === 204) {
          setModalConfirmDelete(false);
          getUsers();
          setUserSelected(null);
        }
      })
      .catch((error) => {
        console.log('Erreur connexion :', error);
      });
  };

  const hideModal = () => {
    setModalConfirmDelete(false);
    setModalUpdateUser(false);
  };

  const showModal = (user, mode) => {
    setUserSelected(user);

    if (mode === 'delete') {
      setModalConfirmDelete(true);
    } else {
      setModalUpdateUser(true);
    }
  };

  return (
    <div className="user__form">
      {users ? (
        <table>
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Status</th>
              <th>Modifier</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.mail_address}</td>
                <td>{user.status}</td>
                <td onClick={() => showModal(user, 'update')}>
                  <span><FontAwesomeIcon icon={faPencilAlt} /></span>
                </td>
                <td onClick={() => showModal(user, 'delete')}>
                  <span><FontAwesomeIcon icon={faTrashAlt} /></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>Aucun users</h1>
      )}
      {modalConfirmDelete
        && <ModalConfirmDelete user={userSelected} hideModal={hideModal} deleteUser={deleteUser} />
      }
      {modalUpdateUser
        && <ModalUpdateUser user={userSelected} hideModal={hideModal} userToken={userToken} getUsers={getUsers} />
      }
    </div>
  );
};

UserForm.propTypes = {
  userToken: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userToken: state.user.token,
});

export default connect(mapStateToProps)(UserForm);
