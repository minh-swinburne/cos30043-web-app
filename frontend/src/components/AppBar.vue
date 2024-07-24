<template>
  <v-app-bar class="px-2">
    <v-row no-gutters align="center">
      <v-col class="d-flex align-center">
        <v-app-bar-nav-icon @click.prevent="$emit('toggle')" />
        <v-app-bar-title>
          <RouterLink class="text-primary d-flex align-center" to="/">
            <v-icon :icon="mdiPaw" class="me-2"></v-icon>
            <span class="font-weight-bold">PetPawPal</span>
          </RouterLink>
        </v-app-bar-title>
      </v-col>

      <v-spacer></v-spacer>

      <v-col lg="4" cols="6">
        <v-form>
          <v-text-field
            v-model="searchString"
            :loading="loading"
            :prepend-inner-icon="mdiMagnify"
            density="compact"
            :label="'Search for pets, posts, users...'"
            placeholder="Pet name, breed, user name, post title..."
            variant="outlined"
            class="mh-100"
            hide-details
            single-line
            clearable
            @click:prepend-inner="search"
          ></v-text-field>
        </v-form>
      </v-col>

      <v-spacer></v-spacer>

      <v-col class="d-flex justify-end pe-2">
        <v-menu
          v-if="authStore.isAuthenticated"
          v-model="menu"
          :close-on-content-click="false"
        >
          <template #activator="{ props }">
            <v-btn
              color="primary"
              variant="elevated"
              v-bind="props"
            >
              {{ authStore.userFullName }}
            </v-btn>
          </template>
        </v-menu>

        <v-row v-else class="justify-end me-2 ga-3 flex-nowrap">
          <v-btn
            color="primary"
            to="/auth/register"
            variant="text"
          >
            <span class="font-weight-bold">Sign Up</span>
          </v-btn>
          <v-btn
            :append-icon="mdiLogin"
            color="primary"
            :to="{ path: '/auth/login', query: { redirect: $route.fullPath } }"
            variant="elevated"
          >
            <span class="font-weight-bold">Login</span>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores'

import { mdiPaw, mdiMagnify, mdiLogin, mdiLogout } from '@mdi/js'

const authStore = useAuthStore()
const $route = useRoute()

const searchString = ref('')
const searchTypes = ref([
  'Posts',
  'Users',
  'Pets'
])

const loading = ref(false)
const menu = ref(false)

function search() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<style scoped>
.v-app-bar {
  padding: 0 3px;
  transition: background 0.4s;
}
.v-app-bar-title {
  cursor: pointer;
  margin-left: 5px;
}
</style>