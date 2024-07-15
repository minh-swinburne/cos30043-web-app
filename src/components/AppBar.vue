<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click.prevent="$emit('toggle')" />
    <v-app-bar-title>
      <RouterLink class="text-primary d-flex align-center" to="/">
        <v-icon :icon="mdiPaw" class="me-2"></v-icon>
        <span class="font-weight-bold">PetPawPal</span>
      </RouterLink>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { mdiPaw } from '@mdi/js'
</script>

<style scoped>
.v-app-bar {
  padding: 0 3px;
  transition: background 0.4s;
}
.v-app-bar-title {
  cursor: pointer;
  margin-left: 5px;
}
</style>