import api from '../../services/api';
import { RequestException } from '../../utils/requestException';

async function sendLogin({ username, password }) {
  let response;

  try {
    response = await api.post('/users/login', {
      username,
      password,
    });

    const { token } = response.data.user;
    if (token)
      api.defaults.headers.Authorization = `Bearer ${token}`;
    
    return response.data;
    
  } catch (error) {
    throw new RequestException(error.response.data);
  }

}

export { sendLogin };
