<template>
  <AppEmptyState
    headline="Whoops, 404"
    title="Page not found"
    text="The page you were looking for does not exist"
    :go-back-button="true"
    :retry-button="false"
  >
    <template #media>
      <v-img src="lost.png" height="400"></v-img>
    </template>
  </AppEmptyState>
</template>

<script setup>
import AppEmptyState from '@/components/AppEmptyState'
</script>

<style scoped>
</style>
