import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-firebase-app.web.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
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
