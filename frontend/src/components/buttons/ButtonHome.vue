<template>
  <BaseButton 
    :iconContent="mdiHome"
    color="primary"
    text="Home"
    @click="$router.push('/home')"
  />
</template>

<script setup>
import { useRouter } from 'vue-router'
import { mdiHome } from '@mdi/js'
import BaseButton from '@/components/base/BaseButton.vue'

const $router = useRouter()
</script>