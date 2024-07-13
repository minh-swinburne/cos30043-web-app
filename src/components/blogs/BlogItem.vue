<template>
  <AppCard
    :title="blog.raw.title"
    :subtitle="blog.raw.subtitle"
    :image="blog.raw.imageUrl"
  >
    <template #actions>
      <v-btn 
        text="Read"
        :to="'/blogs/' + blog.raw.id"
      ></v-btn>
    </template>
  </AppCard>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue'

const $props = defineProps({
  blog: {
    type: Object,
    required: true
  }
})
</script>