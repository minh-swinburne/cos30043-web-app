<template>
  <v-empty-state
    headline="Something went wrong"
    title="Unknown error"
    text="Please try again later"
  >
    <template #media>
      <slot name="media">
        <v-img src="paw.svg" height="400"></v-img>
      </slot>
    </template>

    <template #actions>
      <slot name="actions">
        <v-btn
          v-if="$props.goBackButton"
          @click="goBack" 
          :prepend-icon="mdiArrowLeft"
          variant="text"
        >
          Go Back
        </v-btn>

        <v-btn
          v-if="$props.retryButton"
          @click="retry" 
          :prepend-icon="mdiRefresh"
          variant="text"
        >
          Retry
        </v-btn>

        <v-btn
          v-if="$props.goHomeButton"
          @click="goHome" 
          :prepend-icon="mdiHome"
          color="primary"
        >
          Home
        </v-btn>
      </slot>
    </template>
  </v-empty-state>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { mdiArrowLeft, mdiHome, mdiRefresh } from '@mdi/js'

const $router = useRouter()
const $route = useRoute()
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

function retry() {
  $router.go($route.path)
}

function goBack() {
  $router.go(-1)
}

function goHome() {
  $router.push('/home')
}
</script>