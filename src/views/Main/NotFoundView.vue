<template>
  <v-empty-state
  headline="Whoops, 404"
  title="Page not found"
  text="The page you were looking for does not exist"
  image="paw.svg"
  >
    <v-btn @click="goBack" :prepend-icon="mdiArrowLeft">Go Back</v-btn>
    <span class="pa-3"></span>
    <v-btn @click="goHome" :prepend-icon="mdiHome" color="primary">Home</v-btn>
  </v-empty-state>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { mdiArrowLeft, mdiHome } from '@mdi/js'

const $router = useRouter()
function goBack() {
  $router.go(-1)
}
function goHome() {
  $router.push('/home')
}
</script>

<style>
</style>
