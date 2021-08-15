import api from '../../services/api';
import { RequestException } from '../../utils/requestException';

async function createUser({ username, password, name }) {

  try {
    await api.post('/users', {
      name,
      password,
      username
    });    
    
  } catch (error) {
    throw new RequestException(error.response.data);
  }

}

export { createUser };
