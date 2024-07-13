<template>
  <v-container fluid class="my-5">
    <v-row>
      <v-col cols="12">
        <BlogList name="Recommended" :source="recommendedUrl"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import BlogList from '@/components/blogs/BlogList.vue'

const recommendedUrl = ref('https://newsapi.org/v2/everything?' +
  'q=Apple&' +
  'from=2024-06-14&' +
  'sortBy=popularity&' +
  'apiKey=f47fe6119dfc4592ae04366502ae2ffd'
  )
</script>