import api from '../../services/api';
import { RequestException } from '../../utils/requestException';

async function loadProjects() {
  let response;

  try {
    response = await api.get(`/projects`);
  } catch (error) {
    throw new RequestException(error.response.data);
  }

  return response.data;
}

async function deleteProject(id) {
  try {
     await api.delete(`/projects/${id}`);
  } catch (error) {
    throw new RequestException(error.response.data);
  }
}

async function createProject(name) {
  try {
    await api.post(`/projects`, {name});
  } catch (error) {
    throw new RequestException(error.response.data);
  }
}

export { loadProjects, deleteProject, createProject };
