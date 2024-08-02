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

          <v-card-text class="pb-0">
            <v-form ref="form" @submit.prevent="register">
              <v-text-field
                v-model="username"
                :rules="rules.usernameRules"
                :prepend-icon="mdiAccount"
                label="Username"
                type="text"
                color="primary"
                autocomplete="username"
                class="mb-5"
                required counter
              ></v-text-field>

              <v-text-field
                v-model="pwd1"
                :rules="rules.pwdRules" 
                :prepend-icon="mdiLock"
                :append-inner-icon="showPwd1 ? mdiEye : mdiEyeOff"
                :type="showPwd1 ? 'text' : 'password'"
                label="Password"
                color="primary"
                autocomplete="new-password"
                class="mb-5"
                required counter
                @click:append-inner="showPwd1 = !showPwd1"
                @copy.prevent @cut.prevent
              ></v-text-field>

              <v-text-field
                v-model="pwd2"
                :rules="pwd2Rules"
                :prepend-icon="mdiLock"
                :append-inner-icon="showPwd2 ? mdiEye : mdiEyeOff"
                :type="showPwd2 ? 'text' : 'password'"
                label="Confirm Password"
                color="primary"
                autocomplete="new-password"
                class="mb-5"
                required counter
                @click:append-inner="showPwd2 = !showPwd2"
                @copy.prevent @cut.prevent
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions class="px-5 px-xs-2 py-0">
            <v-spacer></v-spacer>

            <v-tooltip text="Reset Form" location="top">
              <template v-slot:activator="{ props }">
                <v-btn 
                  v-bind="props" 
                  color="red" 
                  variant="elevated"
                  :icon="mdiRefresh" 
                  @click="reset()"
                ></v-btn>
              </template>
            </v-tooltip>

            <v-tooltip text="Reset Validation" location="top">
              <template v-slot:activator="{ props }">
                <v-btn 
                  v-bind="props" 
                  color="orange-darken-1"
                  variant="elevated"
                  :icon="mdiBroom" 
                  @click="resetValidation()"
                ></v-btn>
              </template>
            </v-tooltip>
          </v-card-actions>
          
          <v-card-actions class="mb-5 px-5 px-xs-2">
            <v-spacer></v-spacer>
            <v-btn 
              color="blue"
              variant="elevated"
              @click="nextFieldset()" 
              :loading="loading"
              :append-icon="mdiArrowRight"
            >
              Next
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
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
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores'
import { mdiAccount, mdiLock, mdiEye, mdiEyeOff, mdiRefresh, mdiBroom, mdiArrowRight } from '@mdi/js'

import BackButton from '@/components/buttons/ButtonBack.vue'

const authStore = useAuthStore()

const form = ref(null)
const username = ref('')
const pwd1 = ref('')
const pwd2 = ref('')

const showPwd1 = ref(false)
const showPwd2 = ref(false)

const rules = ref({
  usernameRules: [
		  v => !!v || 'Username is required',
			v => v.length >= 3 || 'Username must be at least 3 characters',
		],

  pwdRules: [
    v => !!v || 'Password is required',
    v => v.length >= 8 || 'Password must be at least 8 characters',
    v => /[\$\%\^\&\*]/.test(v) || 'Password must contain at least one special character ($, %, ^, &, *)',
  ],
})

const pwd2Rules = computed(() => [
  v => !!v || 'Confirm password is required',
  v => v === pwd1.value || 'Passwords must match',
])

function reset() {
  form.value.reset()
}

function resetValidation() {
  form.value.resetValidation()
}

function nextPage() {
  console.log('Step 1')
}

function register() {
  console.log('Register')
}
</script>