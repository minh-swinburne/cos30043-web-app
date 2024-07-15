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
import { useDisplay } from 'vuetify'

import AppBar from '@/components/AppBar'
import AppNavigation from '@/components/AppNavigation'
import navItems from '@/services/navigation'

const { lgAndUp } = useDisplay()
const drawer = ref(lgAndUp.value)

function toggleNav() {
  drawer.value = !drawer.value
}
</script>
