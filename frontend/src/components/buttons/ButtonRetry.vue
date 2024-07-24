<template>
  <BaseButton 
    :iconContent="mdiRefresh" 
    variant="text" 
    text="Retry"
    @click="$router.go($route.path)"
  />
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { mdiRefresh } from '@mdi/js'
import BaseButton from '@/components/base/BaseButton.vue'

const $router = useRouter()
const $route = useRoute()
</script>