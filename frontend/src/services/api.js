import { set } from '@vueuse/core';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: './src/data',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  async getPosts(source, params={}) {
    // console.log(params);
    return apiClient.get(source, { params: params }).then(await new Promise( (resolve) => {setTimeout(resolve, 1000)}));
    // setTimeout(() => {
    //   return response.data;
    // }, 1000);
    // console.log(response.data);
    // throw new Error('Not implemented');
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
