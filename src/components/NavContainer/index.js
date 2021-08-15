import React, { useCallback } from 'react';

import PropTypes from 'prop-types';

import { NavContent } from './styles';

import api from '../../services/api';

function NavContainer({history}) {

  const onLogout = useCallback(() => {
    api.defaults.headers.Authorization = undefined;
    history.push("/login")
  },[history])

  return (
    <NavContent>
      <div className="left">
        <h4>TODO List</h4>
      </div>
      <div className="right">
        <button onClick={() => onLogout()}>Logout</button>
      </div>
    </NavContent>
  );
}

NavContainer.propTypes = {
  history: PropTypes.object.isRequired
};

export default NavContainer;
