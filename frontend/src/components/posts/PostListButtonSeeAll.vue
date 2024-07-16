<template>
  <v-btn
    variant="text"
    :append-icon="mdiArrowRight"
    @click="$router.push($props.source)"
  >
    <span class="text-h6 text-decoration-underline text-none">
      See all
    </span>
  </v-btn>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { mdiArrowRight } from '@mdi/js'

const $router = useRouter()
const $props = defineProps({
  source: {
    type: String,
    default: '',
  },
})

// console.log($props.source)
</script>