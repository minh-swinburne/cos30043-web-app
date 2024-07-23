<template>
  <v-container 
    v-if="!failed"
    fluid 
    class="my-3 my-md-5"
  >
    <v-row>
      <v-col cols="12">
        <PostList 
          name="Recommended" 
          :source="recommendedUrl"
          @fail="failed = true"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <PostList 
          name="BBC News" 
          :source="bbcUrl"
          @fail="failed = true"
        />
      </v-col>
    </v-row>
  </v-container>

  <AppEmptyState
    v-else
    headline="Something went wrong"
    title="Failed to fetch posts"
    text="Please try again later"
  >
    <template #media>
      <v-img src="error.png" height="300"></v-img>
    </template>
  </AppEmptyState>
</template>

<script setup>
import { ref } from 'vue'
import PostList from '@/components/posts/PostList'
import AppEmptyState from '@/components/AppEmptyState'

const failed = ref(false)

// const recommendedUrl = ref('https://newsapi.org/v2/everything?' +
//   'q=Apple&' +
//   'from=2024-06-14&' +
//   'sortBy=popularity&' +
//   'apiKey=f47fe6119dfc4592ae04366502ae2ffd'
//   )
const recommendedUrl = '/posts' // Use this URL for now
const bbcUrl = '/posts'
</script>