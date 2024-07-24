<template>
  <v-empty-state
    headline="Something went wrong"
    title="Unknown error"
    text="Please try again later"
  >
    <template #media>
      <slot name="media">
        <v-img src="error.png" height="300"></v-img>
      </slot>
    </template>

    <template #actions>
      <slot name="actions">
        <ButtonBack v-if="$props.goBackButton" />

        <ButtonRetry v-if="$props.retryButton" />

        <ButtonHome v-if="$props.goHomeButton" />
      </slot>
    </template>
  </v-empty-state>
</template>

<script setup>
import ButtonBack from '@/components/buttons/ButtonBack.vue'
import ButtonRetry from '@/components/buttons/ButtonRetry.vue'
import ButtonHome from '@/components/buttons/ButtonHome.vue'

const $props = defineProps({
  retryButton: {
    type: Boolean,
    default: true
  },
  goBackButton: {
    type: Boolean,
    default: false
  },
  goHomeButton: {
    type: Boolean,
    default: true
  }
})
</script>