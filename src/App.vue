<template>
  <Suspense>
    <v-app class="pa-0 px-md-5 px-lg-10">
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
        class="ma-4 front"
      ></v-btn>
    </v-app>
  </Suspense>
</template>

<script setup>
import { ref, computed, provide } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { useTheme } from 'vuetify'
import apiClient from '@/services/api'
import { useUserStore } from '@/stores/user'
// import AppAlert from './components/base/BaseAlert'
import { mdiWhiteBalanceSunny, mdiWeatherNight } from '@mdi/js'

const userStore = useUserStore()

const websiteName = 'PetPawPal'
provide('websiteName', websiteName)

apiClient.getUser(0)
.then(response => {
  let user = response.data[0]
  userStore.setUser(user)
  // console.log(userStore.bookmarks)
})

// userStore.setUser({ 
//   id: 0,
//   username: 'niceguy_123',
//   firstname: 'Trust Me',
//   lastname: 'Bro',
// });

const theme = ref(useTheme());
const primaryColor = computed(() => theme.value.current.colors.primary)
const r = document.querySelector(':root')
updateTheme()

function darkTheme() {
  return theme.value.global.current.dark;
}

function toggleTheme() {
  console.log(theme.value.global);
  theme.value.global.name = darkTheme() ? 'light' : 'dark'
  updateTheme();
}

function updateTheme() {
  r.style.setProperty('--color-primary', primaryColor.value)
}
</script>

<style>
.front {
  z-index: 9999;
}
.v-btn--variant-text:hover {
  color: var(--color-primary);
}
</style>
