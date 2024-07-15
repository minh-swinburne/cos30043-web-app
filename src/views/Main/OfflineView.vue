<template>
  <AppEmptyState
    headline="No internet connection"
    title="You are currently offline"
    text="Please check your connection and try again"
    :go-home-button="false"
  >
    <template #media>
      <!-- <v-img :src="spaceImage.src" height="400"></v-img> -->
       <!-- <picture>
          <source src="/space.png" type="image/png">
          <source :src="spaceImage" type="image/png">
          <img src="/src/assets/space.png" alt="Offline" height="400">
       </picture> -->
       <v-img src="/space.png" alt="Offline" height="400"></v-img>
    </template>
  </AppEmptyState>
</template>

<script setup>
import AppEmptyState from '@/components/AppEmptyState'
</script>

<style scoped>
</style>
