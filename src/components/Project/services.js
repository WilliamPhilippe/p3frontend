import api from '../../services/api';
import { RequestException } from '../../utils/requestException';

async function listTasks(id) {
  let response;

  try {
    response = await api.get(`/tasks/` + id);
  } catch (error) {
    throw new RequestException(error.response.data);
  }

  return response.data.tasks;
}

async function createTask(description, projectId) {

  try {
    await api.post(`/tasks`, {description, projectId});
  } catch (error) {
    throw new RequestException(error.response.data);
  }

}

async function updateProject(name, id) {

  try {
    await api.put(`/projects`, {name, id});
  } catch (error) {
    throw new RequestException(error.response.data);
  }

}

export { listTasks, createTask, updateProject };
