<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click.prevent="$emit('toggleNav')" />
    <v-app-bar-title>
      <RouterLink class="text-primary font-weight-bold" to="/">
        <slot></slot>
      </RouterLink>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.v-app-bar {
  padding: 0 3px;
  transition: background 0.4s;
}
</style>