<template>
  <AppBar />
  <AppNavigation :items="items" />
  <v-main>
    <!-- <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>
              Welcome to the Home page
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
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
  data() {
    return {
      title: 'Home',
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
                prependIcon: mdiClose,
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
