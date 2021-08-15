import api from '../../services/api';
import { RequestException } from '../../utils/requestException';

async function deleteTask(id) {

    try {
      await api.delete(`/tasks/${id}`);
    } catch (error) {
      throw new RequestException(error.response.data);
    }
  
}

async function checkTask(id) {

    try {
      await api.put(`/tasks`, {
          id
      });
    } catch (error) {
      throw new RequestException(error.response.data);
    }
  
}
  
export { deleteTask, checkTask };