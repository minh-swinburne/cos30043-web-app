<template>
  <v-menu
    v-if="authStore.isAuthenticated"
    v-model="menu"
    :close-on-content-click="false"
  >
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        variant="tonal"
        icon border
      >
        <v-avatar color="primary">
          <v-img v-if="authStore.user?.pfp" :src="authStore.user.avatar"></v-img>
          <v-icon v-else :icon="mdiAccount"></v-icon>
        </v-avatar>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :value="index"
        :to="item.to"
        :prepend-icon="item.icon"
        :title="item.title"
        :base-color="item.color"
        slim
      />
    </v-list>
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
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores'

import { mdiAccount, mdiLogin, mdiLogout } from '@mdi/js'

const $route = useRoute()
const authStore = useAuthStore()

const menu = ref(false)
const items = ref([
  { 
    title: 'Profile', 
    icon: mdiAccount, 
    to: `/user/${authStore.user?.username}/profile` 
  },
  { 
    title: 'Logout', 
    icon: mdiLogout, 
    to: '/auth/logout',
    color: 'red'
  }
])
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}
</style>