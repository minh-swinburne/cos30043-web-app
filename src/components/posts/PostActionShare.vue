<template>
  <v-btn
    :icon="mdiShareVariant"
    @click="sharePost"
  >
  </v-btn>
</template>

<script setup>
import { mdiShareVariant } from '@mdi/js'

const $props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

function sharePost() {
  console.log('Sharing post', $props.post.id)
}
</script>