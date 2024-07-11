<template>
  <v-navigation-drawer elevation="5">
    <v-list nav slim :items="items" active-class="text-primary">
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.v-navigation-drawer {
  transition:
    transform 0.2s,
    background 0.4s;
}
</style>