<template>
  <v-navigation-drawer 
    elevation="5" 
    :rail="collapsed"
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

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    collapsed() {
      if (this.collapsed) {
        this.opened = [];
      }
      else {        
        this.openAncestors(this.$route.path);
      }
    },
  },

  methods: {
    findItem(item, path) {
      if (item.children) {
        for (const child of item.children) {
          if (this.findItem(child, path)) {
            this.opened.push(item.value);
            return true;
          }
        }
      }
      return item.props.to === path;
    },

    openAncestors(path) {
      for (const item of this.items) {
        if (this.findItem(item, path)) {
          return;
        }
      }
    },
  },

  data() {
    return {
      opened: [],
    }
  },
}
</script>

<style scoped>
.v-navigation-drawer {
  transition:
    width 0.2s,
    background 0.4s;
}
.v-navigation-drawer--rail {
  width: 64px !important;
}
</style>