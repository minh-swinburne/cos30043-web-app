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
import { useRouter } from 'vue-router'
import { useMetaStore } from '@/stores'
import apiClient from '@/services/api'

const $router = useRouter()
const $props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})

const metaStore = useMetaStore()
const post = ref({})

apiClient.getPost($props.id)
  .then(response => {
    post.value = response
    document.title = post.value.title + ' | Posts - ' + metaStore.title
  })
  .catch(error => {
    console.error(error)
  })
</script>

<style scoped>
</style>