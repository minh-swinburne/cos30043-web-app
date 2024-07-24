<template>
  <BaseButton 
    :iconContent="mdiArrowLeft" 
    variant="text" 
    text="Back"
    @click="$router.go(-1)"
  />
</template>

<script setup>
import { useRouter } from 'vue-router'
import { mdiArrowLeft } from '@mdi/js'
import BaseButton from '@/components/base/BaseButton.vue'

const $router = useRouter()
</script>