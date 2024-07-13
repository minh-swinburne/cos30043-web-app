<template>
  <AppBar @toggle="toggleNav" />
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

const isSmallScreen = useMediaQuery('(max-width: 1024px)')
const drawer = ref(!isSmallScreen.value)

function toggleNav() {
  drawer.value = !drawer.value
}
</script>
