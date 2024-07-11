<template>
  <AppBar @toggleNav="toggleNav" />
  <AppNavigation :items="items" v-model="drawer"/>
  <v-main>
    <RouterView />
  </v-main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import AppBar from '../components/AppBar.vue'
import AppNavigation from '../components/AppNavigation.vue'
import { mdiHome, mdiTools, mdiCheck, mdiClose } from '@mdi/js'

export default {
  components: {
    AppBar,
    AppNavigation,
  },
  methods: {
    toggleNav() {
      this.drawer = !this.drawer;
    },
  },
  data() {
    return {
      drawer: true,
      items: [
        {
          title: 'Home', 
          value: 1,
          props: {
            prependIcon: mdiHome,
            to: '/home',
          }
        },
        { 
          title: 'Actions', 
          value: 2,
          props: {
            prependIcon: mdiTools,
          },
          children: [
            { 
              title: 'Products', 
              value: 3,
              props: {
                prependIcon: mdiCheck,
                to: '/products',
              }
            },
            { 
              title: 'About', 
              value: 4,
              props: {
                prependIcon: mdiCheck,
                to: '/about',
              }
            },
          ],
        },
      ],
    }
  },
}
</script>
