<template>
  <v-avatar color="white" class="text-primary" :size="$props.size">
    <v-img v-if="authStore.user?.pfp" :src="authStore.user.pfp"></v-img>
    <v-icon v-else :icon="mdiPaw" :size="$props.size/1.35"></v-icon>
  </v-avatar>
</template>

<script setup>
import { useAuthStore } from '@/stores'
import { mdiPaw } from '@mdi/js'

const authStore = useAuthStore()
const $props = defineProps({
  size: {
    type: Number,
    default: 40
  }
})
</script>