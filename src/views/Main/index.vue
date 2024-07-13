<template>
  <AppBar @toggleNav="toggleNav">
    <v-icon :icon="mdiPaw"></v-icon>
    Application
  </AppBar>
  <AppNavigation 
    :items="navItems" 
    :collapsed="!drawer" 
    @open="drawer=true" 
  />
  <v-main>
    <RouterView />
  </v-main>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppBar from '@/components/AppBar.vue'
import AppNavigation from '@/components/AppNavigation.vue'
import navItems from '@/services/navigation'
import { mdiPaw } from '@mdi/js'

const drawer = ref(true)

function toggleNav() {
  drawer.value = !drawer.value
}
</script>
