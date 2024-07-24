<template>
  <v-btn 
    :icon="$props.icon"
    :prepend-icon="$props.iconContent"
  >
    <v-icon v-if="$props.icon">{{ $props.iconContent }}</v-icon>
    <span v-else>{{ $props.text }}</span>
  </v-btn>
</template>

<script setup>
const $props = defineProps({
  icon: {
    type: Boolean,
    default: false
  },

  iconContent: {
    type: String,
  },

  text: {
    type: String,
  }
})
</script>
