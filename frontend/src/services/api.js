import { set } from '@vueuse/core'
import axios from 'axios'

const apiClient = axios.create({
  // baseURL: '/src/data',
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  instance: apiClient,

  async login(credentials) {
    // return apiClient.post('/login', credentials)
    // console.log(credentials)
    let response = await apiClient.get('/users', {
      params: {
        username: credentials.account
      }
    })
    if (!response.data) {
      response = await apiClient.get('/users', {
        params: {
          email: credentials.account
        }
      })
    }
    if (!response.data) {
      return 404 // user not found
    }
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
    const response = await apiClient.get(`/posts`);
    return response.data.find(post => post.id === id);
  },

  async getPostComments(postId) {
    const response = await apiClient.get('/comments');
    return response.data.find(comment => comment.postId === postId)
  },

  getUser(id) {
    // return apiClient.get(`/users/${id}`);
    return apiClient.get('/users', {
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
