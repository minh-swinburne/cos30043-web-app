<template>
  <v-container class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" md="6" lg="5" class="d-flex flex-column justify-center pe-md-10">
        <v-card elevation="5">
          <v-card-title class="my-3 text-center">
            Login
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="account"
                :prepend-icon="mdiAccount"
                label="Email / Username"
                type="text"
                color="primary"
                autocomplete="username"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :prepend-icon="mdiLock"
                :append-inner-icon="showPassword ? mdiEye : mdiEyeOff"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                color="primary"
                autocomplete="current-password"
                required
                @click:append-inner="showPassword = !showPassword"
              ></v-text-field>

              <v-checkbox
                v-model="remember"
                label="Remember Me"
                type="checkbox"
                value="yes"
                color="primary"
              ></v-checkbox>

              <v-btn
                color="primary"
                type="submit"
                class="d-block mx-auto"
              >
                Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>

        <v-row no-gutters class="pa-1 mt-5 align-center flex-0-1">
          Not a member yet?&thinsp;
          <RouterLink 
            :to="{ path: '/auth/register', query: { redirect: $router.currentRoute.value.query.redirect } }" 
            class="text-primary"
          >
            Sign Up
          </RouterLink>

          <RouterLink to="/auth/forgot-password" class="text-primary px-0 w-100">
            Forgot Password?
          </RouterLink>
        </v-row>
      </v-col>

      <v-col cols="12" md="6" lg="7" class="ps-md-5">
        <v-img
          src="/login.png"
          alt="Login Image"
          class="px-lg-5 px-xl-15"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores'
import { mdiAccount, mdiLock, mdiEye, mdiEyeOff } from '@mdi/js'

// import BackButton from '@/components/buttons/ButtonBack.vue'

const account = ref('')
const password = ref('')
const showPassword = ref(false)
const remember = ref(false)

const $router = useRouter()

function login() {
  const authStore = useAuthStore()
  authStore.login({
    account: account.value,
    password: password.value,
    remember: remember.value
  })
    .then(result => {
      if (result.success) {
        $router.push($router.currentRoute.value.query.redirect)
      }
    })
}
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>