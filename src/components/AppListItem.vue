<template>
  <v-list-item :title="title" :subtitle="subtitle">

  </v-list-item>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    children: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
</style>