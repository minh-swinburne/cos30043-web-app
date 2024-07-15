<template>
  <v-btn
    icon
    @click="toggleBookmark"
  >
    <v-icon
      :color="isBookmarked ? 'orange' : 'grey'"
    >
      {{ isBookmarked ? mdiBookmark : mdiBookmarkOutline }}
    </v-icon>
  </v-btn>
</template>

<script setup>
import { ref, computed } from 'vue'
import apiClient from '@/services/api'
import { useUserStore } from '@/stores/user'

import { mdiBookmark, mdiBookmarkOutline } from '@mdi/js'

const userStore = useUserStore()
const $props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const isBookmarked = computed(() => {
  return userStore.bookmarks.includes($props.post.id)
})

function toggleBookmark() {
  console.log('Toggling bookmark')
  if (isBookmarked.value) {
    userStore.bookmarks = userStore.bookmarks.filter(id => id !== $props.post.id)
  } else {
    userStore.bookmarks.push($props.post.id)
  }
  // use apiClient to update the bookmark
}
</script>