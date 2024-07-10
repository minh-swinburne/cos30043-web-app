<template>
  <v-list :items="items">
    <v-list-subheader v-if="header">{{ header }}</v-list-subheader>
  </v-list>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    header: {
      type: String,
      default: '',
    },
  },

  computed: {
    groupedItems() {
      return this.items.reduce((acc, item) => {
        if (!acc[item.group]) {
          acc[item.group] = [];
        }
        acc[item.group].push(item);
        return acc;
      }, {});
    },
  },
}
</script>

<style scoped>
</style>