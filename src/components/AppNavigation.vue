<template>
  <v-navigation-drawer
    :model-value="showing"
    :rail="!(expanded || isSmallScreen)"
    elevation="5"
  >
    <v-list 
      nav slim 
      :items="items"
      :opened="opened"
      active-class="text-primary"
      @click:open="$emit('open')">
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMediaQuery } from '@vueuse/core'

const $route = useRoute()
const $props = defineProps({
  expanded: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    default: () => [],
  },
})

const isSmallScreen = useMediaQuery('(max-width: 1024px)')
const opened = ref([])
const showing = computed(() => $props.expanded || !isSmallScreen.value)

function findItem(item, path) {
  if (item.children) {
    for (const child of item.children) {
      if (findItem(child, path)) {
        opened.value.push(item.value)
        return true
      }
    }
  }
  return item.props.to === path
}

function openAncestors(path) {
  for (const item of $props.items) {
    if (findItem(item, path)) {
      return
    }
  }
}

watch(() => $props.expanded, (expanded) => {
  if (!isSmallScreen) {
    if (expanded) {
      openAncestors($route.path)
    }
    else {
      opened.value = []
    }
  }
})
</script>

<style scoped>
.v-navigation-drawer {
  transition:
    width 0.2s,
    transform 0.2s,
    background 0.4s;
}
.v-navigation-drawer--rail {
  width: 64px !important;
}
</style>