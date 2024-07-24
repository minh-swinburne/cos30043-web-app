import axios from 'axios'
import { hashSync, compareSync } from 'bcryptjs'

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
    // mocking
    let user = (await apiClient.get('/users')).data
    // console.log(user)
    if (user.username !== credentials.account && user.email !== credentials.account) {
      return {
        status: 404,
        message: 'User not found'
      }
    }
    // console.log(hashSync(credentials.password))
    if (!compareSync(credentials.password, user.password)) {
      return {
        status: 401,
        message: 'Incorrect password'
      }
    }
    console.log('login success')
    return {
      status: 200,
      data: {
        token: 'token',
        refreshToken: '',
        expires: 0,
        user: user,
      }
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
