<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card max-width="400" width="100%">
          <v-card-title class="my-3 text-center">
            Logout
          </v-card-title>
          <v-card-subtitle>
            Wait, {{ authStore.user?.firstname }}...
          </v-card-subtitle>
          <v-card-text>
            <p>Are you sure you want to logout?</p>
          </v-card-text>
          <v-card-actions class="justify-end pa-5">
            <v-btn 
              :loading="loading"
              color="primary"
              @click="logout"
            >
              Yes
            </v-btn>
            <v-btn 
              variant="elevated" 
              color="primary"
              @click="$router.go(-1)"
            >
              No
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores'

const $router = useRouter()
const authStore = useAuthStore()
const loading = ref(false)

function logout() {
  loading.value = true
  setTimeout(() => {
    authStore.logout()
    $router.push('/home')
  }, 1000)
}
</script>

<style scoped>
</style>