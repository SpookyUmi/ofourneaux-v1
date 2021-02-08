import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import './styles.scss';

const CheckError = () => {
  function checkErrorFunction(props) {
    useEffect(() => {
      axios.interceptors.response.use((response) => response);
    }, (error) => {
      switch (error.response.status) {
        case 404:
          props.history.push('/404');
          break;
        default:
          break;
      }
      return Promise.reject(error);
    });
    return (
      <div className="searchfail">
        <h2>Vous venez d'atteindre le royaume Inexistant.</h2>
        <h2>Fuyez, pauvres fous !</h2>
        <NavLink to="/">Retour sur notre site</NavLink>
      </div>
    );
  }
  return checkErrorFunction;
};

export default CheckError;
