<template>
  <v-card variant="elevated">
    <v-img 
      v-if="image && imgPos === 'top'"
      :src="image"
      height="240"
      cover
    ></v-img>

    <slot name="header"></slot>

    <v-card-title>
      <slot name="title">
        {{ title }}
      </slot>
    </v-card-title>

    <v-card-subtitle v-if="$slots.subtitle">
      <slot name="subtitle">
        {{ subtitle }}
      </slot>
    </v-card-subtitle>

    <v-card-text>
      <slot name="content"></slot>
    </v-card-text>

    <v-img 
      v-if="image && imgPos === 'bottom'"
      :src="image"
      height="240"
      cover
    ></v-img>

    <v-card-actions class="px-5 pb-5">
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useSlots } from 'vue';

const $slots = useSlots();
const $props = defineProps({
  title: String,
  subtitle: String,
  image: String,
  imgPos: {
    type: String,
    default: 'top'
  }
})
</script>

<style scoped>
</style>