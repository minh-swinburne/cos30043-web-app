<template>
  <v-app>
    <!-- <AppAlert
      message="Alert!"
      :timeout="0"
    /> -->
    <RouterView />
    <v-btn 
      @click="toggleTheme" 
      :icon="darkTheme() ? mdiWhiteBalanceSunny : mdiWeatherNight"
      :theme="darkTheme() ? 'light' : 'dark'"
      position="fixed"
      location="bottom left"
      class="ma-4"
    ></v-btn>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useTheme } from 'vuetify'
// import AppAlert from './components/AppAlert.vue'
import { mdiWhiteBalanceSunny, mdiWeatherNight } from '@mdi/js'

const theme = ref(useTheme());

function darkTheme() {
  return theme.value.global.current.dark;
}

function toggleTheme() {
  theme.value.global.name = darkTheme() ? 'light' : 'dark';
}
</script>

<style scoped>
  .v-btn {
    z-index: 9999;
  }
</style>
