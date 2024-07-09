<script>
import { useTheme } from 'vuetify'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Alert from './components/BaseAlert.vue'
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
    this.setTheme(this.getSystemTheme());
    // console.log(this.getTheme());
    // console.log(mdiWeatherNight);
  },

  methods: {
    darkTheme() {
      return this.theme.global.current.dark;
    },

    setTheme(theme) {
      this.theme.global.name = theme;
    },

    toggleTheme() {
      this.setTheme(this.darkTheme() ? 'light' : 'dark');
    },

    getSystemTheme() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
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
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
