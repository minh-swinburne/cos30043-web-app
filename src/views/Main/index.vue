<template>
  <AppBar @toggleNav="toggleNav">\
    <template #title>
      <v-icon :icon="mdiPaw" class="me-2"></v-icon>
      Application
    </template>
  </AppBar>
  <AppNavigation 
    :items="navItems" 
    :expanded="drawer" 
    @open="drawer=true" 
  />
  <v-main>
    <RouterView />
  </v-main>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useMediaQuery } from '@vueuse/core'
import AppBar from '@/components/AppBar.vue'
import AppNavigation from '@/components/AppNavigation.vue'
import navItems from '@/services/navigation'
import { mdiPaw } from '@mdi/js'

const isSmallScreen = useMediaQuery('(max-width: 600px)')
const drawer = ref(!isSmallScreen.value)

function toggleNav() {
  drawer.value = !drawer.value
}
</script>
