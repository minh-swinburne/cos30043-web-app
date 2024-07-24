<template>
  <v-btn
    variant="text"
    :append-icon="mdiArrowRight"
    :to="$props.source"
  >
    <span class="text-h6 text-decoration-underline text-none">
      See all
    </span>
  </v-btn>
</template>

<script setup>
import { mdiArrowRight } from '@mdi/js'

const $props = defineProps({
  source: {
    type: String,
    default: '',
  },
})

// console.log($props.source)
</script>