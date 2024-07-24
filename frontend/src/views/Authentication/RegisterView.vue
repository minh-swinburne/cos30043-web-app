<template>
  <v-container class="pa-0">
    <v-row v-if="authStore.isAuthenticated">
      <v-col class="d-flex justify-center">
        <v-card max-width="400" width="100%">
          <v-card-title class="my-3 text-center">
            Login
          </v-card-title>
          <v-card-subtitle>
            Wait, {{ authStore.user?.firstname }}...
          </v-card-subtitle>
          <v-card-text>
            <p>You are currently logged in. Please go back or log out first before registering a new account.</p>
          </v-card-text>
          <v-card-actions class="justify-space-between pa-5">
            <BackButton />

            <v-btn 
              :append-icon="mdiLogout"
              variant="elevated" 
              color="red"
              @click="$router.push('/auth/logout')"
            >
              Logout
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else no-gutters>
      <v-col cols="12" md="6" lg="7" class="pe-md-5">
        <v-img
          src="/register.png"
          alt="Register Image"
          class="px-lg-5 px-xl-15"
        ></v-img>
      </v-col>

      <v-col cols="12" md="6" lg="5" class="d-flex flex-column justify-center ps-md-10">
        <v-card elevation="5">
          <v-card-title class="my-3 text-center">
            Register
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="register">
              <v-text-field
                v-model="username"
                :prepend-icon="mdiAccount"
                label="Username"
                type="text"
                color="primary"
                autocomplete="username"
                required
              ></v-text-field>

              <v-text-field
                v-model="pwd1"
                :prepend-icon="mdiLock"
                :append-inner-icon="showPwd1 ? mdiEye : mdiEyeOff"
                :type="showPwd1 ? 'text' : 'password'"
                label="Password"
                color="primary"
                autocomplete="new-password"
                required
                @click:append-inner="showPwd1 = !showPwd1"
              ></v-text-field>

              <v-text-field
                v-model="pwd2"
                :prepend-icon="mdiLock"
                :append-inner-icon="showPwd2 ? mdiEye : mdiEyeOff"
                :type="showPwd2 ? 'text' : 'password'"
                label="Confirm Password"
                color="primary"
                autocomplete="new-password"
                required
                @click:append-inner="showPwd2 = !showPwd2"
              ></v-text-field>

              <v-btn
                color="primary"
                class="d-block mx-auto"
              >
                Next
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>

        <v-row no-gutters class="pa-1 mt-5 align-center flex-0-1">
          Already a member?&thinsp;
          <RouterLink 
            :to="{ path: '/auth/login', query: { redirect: $router.currentRoute.value.query.redirect } }" 
            class="text-primary"
          >
            Login
          </RouterLink>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores'
import { mdiAccount, mdiLock, mdiEye, mdiEyeOff } from '@mdi/js'

import BackButton from '@/components/buttons/ButtonBack.vue'

const authStore = useAuthStore()

const username = ref('')
const pwd1 = ref('')
const pwd2 = ref('')

const showPwd1 = ref(false)
const showPwd2 = ref(false)

function nextPage() {
  console.log('Step 1')
}

function register() {
  console.log('Register')
}
</script>