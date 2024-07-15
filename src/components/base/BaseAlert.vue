<template>
  <v-alert
    :model-value="showing"
    :type="type"
    :color="color"
    :icon="icon"
    :text="message"
    :position="position"
    :location="location"
    :closable="closable"
    class="ma-md-4 ma-2"
    elevation="2"
  >
    <v-progress-linear
      v-if="timeout > 0"
      :model-value="progress-5"
      height="4"
      location="bottom"
      absolute
    ></v-progress-linear>
  </v-alert>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showing = ref(true)
const progress = ref(100)
const interval = ref(null)

const $emit = defineEmits(['close'])
const $props = defineProps({
  message: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'info',
  },
  color: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: null,
  },
  position: {
    type: String,
    default: 'fixed',
  },
  location: {
    type: String,
    default: 'top right',
  },
  closable: {
    type: Boolean,
    default: true,
  },
  timeout: {
    type: Number,
    default: 5000,
  },
})

onMounted(() => {
  if ($props.timeout <= 0) return;
  const duration = 50;
  const step = 100 / ($props.timeout / duration);
  interval.value = setInterval(() => {
    if (progress.value <= 0) {
      showing.value = false;
      $emit('close');
      clearInterval(interval.value);
    }
    progress.value -= step;
  }, duration);
})

onBeforeUnmount(() => {
  clearInterval(interval.value);
})
</script>

<style scoped>
.v-alert {
  z-index: 9999;
}
</style>