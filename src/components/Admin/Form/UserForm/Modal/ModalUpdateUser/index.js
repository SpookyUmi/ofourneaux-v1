// YARN
import React, { useState } from 'react';
import URL from 'src/middlewares/urlEnv';
import axios from 'axios';
import FormData from 'form-data';
import './modalUpdateUser.scss';

const statusUser = [
  { id: 1, name: 'admin' },
  { id: 2, name: 'user' },
];

// component
const ModalUpdateUser = (props) => {
  const [firstName, setFirstName] = useState(props.user.first_name);
  const [lastName, setLastName] = useState(props.user.last_name);
  const [mailAddress, setMailAddress] = useState(props.user.mail_address);
  const [statusId, setStatusId] = useState(statusUser.find((value) => value.name == props.user.status).id);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'first_name':
        setFirstName(value);
        break;
      case 'last_name':
        setLastName(value);
        break;
      case 'mail_address':
        setMailAddress(value);
        break;
      case 'status':
        setStatusId(Number(value));
        break;
      default:
        break;
    }
  };

  const formProfile = new FormData();
  formProfile.append('last_name', lastName);
  formProfile.append('first_name', firstName);
  formProfile.append('mail_address', mailAddress);
  formProfile.append('status_id', statusId);

  const updateUser = async () => {
    await axios({
      method: 'PATCH',
      url: `${URL}/users/${props.user.id}`,
      data: formProfile,
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: props.userToken,
      },
    })
      .then((response) => {
        // console.log(response);
        props.getUsers();
        props.hideModal();
      })
      .catch((error) => {
        console.log('Erreur connexion :', error);
      });
  };

  return (
    <div className="modal">
      <h1 className="modal__title">Modifier l'utilisateur</h1>
      <div className="modal__update__input">
        <input type="text" value={firstName} name="first_name" onChange={(event) => handleChange(event)} />
        <input type="text" value={lastName} name="last_name" onChange={(event) => handleChange(event)} />
        <input type="text" value={mailAddress} name="mail_address" onChange={(event) => handleChange(event)} />
        <select name="status" value={statusId} onChange={(event) => handleChange(event)}>
          <option value="1">Admin</option>
          <option value="2">User</option>
        </select>
      </div>
      <div className="modal__buttons">
        <button className="modal__button" type="button" onClick={updateUser}>Enregistrer</button>
        <button className="modal__button" type="button" onClick={props.hideModal}>Annuler</button>
      </div>
    </div>
  );
};

export default ModalUpdateUser;
