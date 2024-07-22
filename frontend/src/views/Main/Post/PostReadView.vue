<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-text>
            {{ post.content }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
// import { useRoute } from 'vue-router'
import apiClient from '@/services/api'

const $props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})

const post = ref({})
apiClient.getPost($props.id)
  .then(response => {
    post.value = response
    console.log(post.value)
  })
  .catch(error => {
    console.error(error)
  })
</script>

<style scoped>
</style>