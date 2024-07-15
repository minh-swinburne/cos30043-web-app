<template>
  <v-btn
    :prepend-icon="mdiMessageText"
    @click="showComments"
    variant="text"
  >
    <slot></slot>
  </v-btn>
</template>

<script setup>
import { mdiMessageText } from '@mdi/js'

import apiClient from '@/services/api'

const $props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

function showComments() {
  // use apiClient to fetch the comments and show them
  alert('Show comments for post ' + $props.post.id)
}

</script>

<style>
</style>