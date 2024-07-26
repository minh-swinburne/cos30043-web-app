<template>
  <v-card variant="elevated" border>
    <RouterLink :to="imgLink" :target="target">
      <v-img 
        v-if="image && imgPos === 'top'"
        :src="image"
        height="240"
        cover
      ></v-img>
    </RouterLink>

    <slot name="header"></slot>

    <v-card-title class="px-xs-2 mb-2">
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

    <RouterLink :to="imgLink" :target="target" class="pa-0">
      <v-img 
        v-if="image && imgPos === 'bottom'"
        :src="image"
        :to="imgLink"
        height="240"
        class="mb-2"
        cover
      ></v-img>
    </RouterLink>

    <v-card-actions class="mx-auto pb-5">
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useSlots } from 'vue';
import { RouterLink } from 'vue-router';

const $slots = useSlots();
const $props = defineProps({
  title: String,
  subtitle: String,
  image: String,
  imgPos: {
    type: String,
    default: 'top'
  },
  imgLink: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: ''
  },
})
</script>

<style scoped>
a {
  display: block;
  height: auto;
}

@media (max-width: 320px) {
  .v-card-actions {
    padding: 0.5rem !important;
  }
}
</style>