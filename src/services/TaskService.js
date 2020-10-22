import axios from 'axios';

const url = 'https://5f8f61c8693e730016d7b064.mockapi.io/api/v1';

export const getAllTasks = async () => {
  return axios.get(`${url}/task`);
}

export const getTask = (id) => {
  return axios.get(`${url}/task/${id}`);
}

export const createTask = (title, description) => {
  return axios.post(`${url}/task`, { title, description });
}
