import { set } from '@vueuse/core'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: '/src/data',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  instance: apiClient,

  login(credentials) {
    return apiClient.post('/login', credentials)
  },

  setToken(token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },

  async getPosts(source, params={}) {
    // console.log(source);
    return apiClient.get(source, { params: params })
      .then(await new Promise( (resolve) => {setTimeout(resolve, 1000)}))
    // setTimeout(() => {
    //   return response.data;
    // }, 1000);
    // console.log(response.data);
    // throw new Error('Not implemented');
  },

  async getPost(id) {
    // correct api call doesn't need async/await
    // return apiClient.get(`/posts/${id}`);
    const response = await apiClient.get(`/posts.json`);
    return response.data.find(post => post.id === id);
  },

  getUser(id) {
    // return apiClient.get(`/users/${id}`);
    return apiClient.get('/users.json', {
      params: {
        id,
      },
    });
    // return response.data.find(user => user.id === id);
  },
  getPets() {
    return apiClient.get('/pets');
  },
  getPet(id) {
    return apiClient.get(`/pets/${id}`);
  },
  createPet(pet) {
    return apiClient.post('/pets', pet);
  },
  updatePet(id, pet) {
    return apiClient.put(`/pets/${id}`, pet);
  },
  deletePet(id) {
    return apiClient.delete(`/pets/${id}`);
  },
};
