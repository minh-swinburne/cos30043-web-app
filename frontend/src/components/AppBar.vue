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

      <v-col v-if="!mobile" lg="4" cols="6">
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
        <UserMenu />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useDisplay } from 'vuetify'

import UserMenu from '@/components/AppBarUserMenu'

import { mdiPaw, mdiMagnify } from '@mdi/js'

const { mobile } = useDisplay()

const searchString = ref('')
const searchTypes = ref([
  'Posts',
  'Users',
  'Pets'
])

const loading = ref(false)

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