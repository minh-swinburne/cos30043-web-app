<template>
  <v-container class="pt-10">
    <v-row no-gutters>
      <v-col>
        <RouterLink to="/home" class="text-primary d-flex flex-column align-center">
          <v-icon :icon="mdiPaw" size="100"></v-icon>
          <h1 class="text-center mt-n3">{{ websiteName }}</h1>
        </RouterLink>
      </v-col>
    </v-row>
    <v-row no-gutters class="my-10">
      <RouterView />
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { mdiPaw } from '@mdi/js'

const websiteName = inject('websiteName')
</script>

<style scoped>
.v-row:first-child {
  top: 3rem;
}
</style>