<template>
  <AppBar @toggle="toggleNav" />
  <AppNavigation 
    :items="navItems" 
    :expanded="drawer"
    @open="drawer=true" 
  />
  <v-main>
    <RouterView />
  </v-main>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useDisplay } from 'vuetify'

import AppBar from '@/components/AppBar'
import AppNavigation from '@/components/AppNavigation'
import navItems from '@/services/navigation'

const { lgAndUp } = useDisplay()
const drawer = ref(lgAndUp.value)

function toggleNav() {
  drawer.value = !drawer.value
}

fetch('/api/posts/1')
  .then(response => response.text())
  .then(json => console.log(json))

fetch('/api/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    views: Math.floor(Math.random() * 1000)
  })
})
  .then(response => response.json())
  .then(json => {
    let id = json.id
    console.log(id)
    // Fetch the newly created todo
    // This will fail if the POST request failed
    fetch(`/api/posts/${id}`)
      .then(response => response.json())
      .then(json => console.log(json))
    fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: 'bar',
        views: Math.floor(Math.random() * 1000)
      })
    })
      .then(response => response.json())
      .then(json => console.log(json))
    fetch(`/api/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'baz'
      })
    })
      .then(response => response.json())
      .then(json => console.log(json))
    fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(json => console.log(json))
  })
</script>
