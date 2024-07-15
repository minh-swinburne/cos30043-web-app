import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    id: null,
    username: '',
    firstname: '',
    lastname: '',
    bookmarks: [],
  }),
  getters: {
    isLoggedIn: (state) => !!state.id,
    fullname: (state) => `${state.firstname} ${state.lastname}`,
  },
  actions: {
    init() {
      // Check if the user is already logged in
      // and set the user state accordingly
    },
    setUser(user) {
      Object.assign(this.$state, user)
    },
    updateFirstName(newFirstName) {
      this.firstname = newFirstName
    },
    updateLastName(newLastName) {
      this.lastname = newLastName
    },
    logout() {
      this.$reset()
    }
  },
});