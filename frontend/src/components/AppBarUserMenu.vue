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
        <UserAvatar />
      </v-btn>
    </template>

    <v-list>
      <v-list-item class="px-10 py-5">
        <v-list-item-media class="d-flex justify-center mb-3">
          <UserAvatar size="75" />
        </v-list-item-media>
        <v-list-item-title class="text-center text-h5">
          {{ authStore.userFullName }}
        </v-list-item-title>
        <v-list-item-subtitle class="text-center">
          {{ authStore.user?.username }}
        </v-list-item-subtitle>
      </v-list-item>

      <v-divider class="py-1"></v-divider>

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
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores'

import UserAvatar from '@/components/AppUserAvatar.vue'
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