<script>
import { useTheme } from 'vuetify'
import { RouterLink, RouterView } from 'vue-router'
import Alert from './components/AppAlert.vue'
import { mdiWhiteBalanceSunny, mdiWeatherNight, mdiCheckDecagram } from '@mdi/js'

export default {
  data() {
    return {
      theme: null,
      darkIcon: mdiWhiteBalanceSunny,
      lightIcon: mdiWeatherNight,
    }
  },

  created() {
    this.theme = useTheme();
    // console.log(this.theme.global.current);
  },

  methods: {
    darkTheme() {
      return this.theme.global.current.dark;
    },

    toggleTheme() {
      this.theme.global.name = this.darkTheme() ? 'light' : 'dark';
    },
  },

  components: {
    RouterView,
  },
}
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Alert
        :timeout="5000"
        :icon="mdiCheckDecagram"
        color="green"
        type="success"
        message="Success! This will be automatically dismissed in 5 seconds 🎉"
        position="fixed"
        location="top left"
        closable
      />
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
      </nav>
    </div>
  </header> -->

  <v-app>
    <RouterView />
    <v-btn 
      @click="toggleTheme" 
      :icon="darkTheme() ? darkIcon : lightIcon"
      :theme="darkTheme() ? 'light' : 'dark'"
      position="fixed"
      location="bottom left"
      class="ma-4"
    ></v-btn>
  </v-app>
</template>

<style scoped>
  .v-btn {
    z-index: 9999;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  .logo {
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
