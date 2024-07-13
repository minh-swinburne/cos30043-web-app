<template>
  <v-card variant="elevated">
    <v-img 
      v-if="image"
      :src="image"
      height="240"
      cover
    ></v-img>

    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>

    <v-card-text>
      <slot name="content"></slot>
    </v-card-text>

    <v-card-actions>
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const $props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: String,
  image: String,
})
</script>

<style scoped>
</style>