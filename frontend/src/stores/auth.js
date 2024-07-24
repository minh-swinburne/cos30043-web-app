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
    userFullName: (state) => `${state.user.firstname} ${state.user.lastname}`,
  },

  actions: {
    setUser(user) {
      this.user = user
    },

    async login(credentials) {
      try {
        const response = await apiClient.login(credentials)
        if (response.status !== 200) {
          return {
            success: false,
            message: response.message,
          }
        }
        const token = response.data.token
        this.$patch({
          token: token,
          refreshToken: response.data.refreshToken,
          expires: response.data.expires,
          // user: jwt_decode(token) // Decode the JWT to get user info
          user: response.data.user // Dev only, remove when implementing backend
        })
        // console.log('User:', this.user)
        if (credentials.remember) {
          localStorage.setItem('token', token)
          localStorage.setItem('refreshToken', response.data.refreshToken)
          localStorage.setItem('expires', response.data.expires)
        } else {
          sessionStorage.setItem('token', token)
          sessionStorage.setItem('refreshToken', response.data.refreshToken)
          sessionStorage.setItem('expires', response.data.expires)
          sessionStorage.setItem('user', JSON.stringify(response.data.user))
        }
        apiClient.setToken(token)
        return {
          success: true,
          message: 'Logged in successfully',
        }
      } catch (error) {
        console.error('Error logging: ', error)
        return {
          success: false,
          message: 'An error occurred while logging in. Please try again later.',
        }
      }
    },

    checkToken() {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token')
      if (token) {
        this.token = token
        this.refreshToken = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken')
        this.expires = localStorage.getItem('expires') || sessionStorage.getItem('expires')
        this.user = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null
        apiClient.setToken(token)
      }
    },
    
    logout() {
      this.$reset()
    },
  },
})