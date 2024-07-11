<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click.prevent="$emit('toggleNav')" />
    <v-app-bar-title class="text-primary">
      Application Bar
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
};
</script>

<style scoped>
.v-app-bar {
  transition: background 0.4s;
}
</style>