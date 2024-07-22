import { defineStore } from 'pinia'
import apiClient from '@/services/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    refreshToken: '',
    expires: 0,
    user: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(credentials) {
      try {
        const response = await apiClient.login(credentials)
        if (response.status !== 200) {
          throw new Error(response)
        }
        const token = response.data.token
        this.$patch({
          token: token,
          refreshToken: response.data.refreshToken,
          expires: response.data.expires,
          user: jwt_decode(token) // Decode the JWT to get user info
        })
        if (credentials.remember) {
          localStorage.setItem('token', token)
          localStorage.setItem('refreshToken', response.data.refreshToken)
          localStorage.setItem('expires', response.data.expires)
        } else {
          sessionStorage.setItem('token', token)
          sessionStorage.setItem('refreshToken', response.data.refreshToken)
          sessionStorage.setItem('expires', response.data.expires)
        }
        apiClient.setToken(token)
        return true // Return true if login is successful
      } catch (error) {
        console.error('Error logging in', error)
        return false // Return false if login fails
      }
    },
    
    logout() {
      // this.token = ''
      // this.refreshToken = ''
      // this.expires = 0
      // this.user = null
      this.$reset()
    },
  },
})