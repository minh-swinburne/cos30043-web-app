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
import { useAuthStore } from '@/stores'

import { mdiBookmark, mdiBookmarkOutline } from '@mdi/js'

const $props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const user = useAuthStore().user

const isBookmarked = computed(() => {
  return user?.bookmarks.includes($props.post.id)
})

function toggleBookmark() {
  console.log('Toggling bookmark')
  if (isBookmarked.value) {
    user.bookmarks = user.bookmarks.filter(id => id !== $props.post.id)
  } else {
    user.bookmarks.push($props.post.id)
  }
  // use apiClient to update the bookmark
}
</script>