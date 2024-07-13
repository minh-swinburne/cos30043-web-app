<template>
  <AppCard
    :image="blog.raw.imageUrl"
  >
    <template #header>
      <div class="px-5 pt-4 d-flex align-center">
        <v-avatar color="white" class="me-3">
          <v-img
            v-if="author.pfp"
            :src="author.pfp" 
            alt="Author Profile Picture"
          ></v-img>

          <v-icon v-else class="text-primary">
            {{ mdiPaw }}
          </v-icon>
        </v-avatar>

        <RouterLink :to="'user/' + author.id">
          {{ author.name }}
        </RouterLink>
      </div>
    </template>

    <template #title>
      <RouterLink :to="'/blogs/' + blog.raw.id">
        {{ blog.raw.title }}
      </RouterLink>
    </template>

    <template #content>
      <div class="subtitle">
        {{ blog.raw.subtitle }}
      </div>
    </template>

    <template #actions class="px-5">
      <v-btn
        variant="flat"
        color="blue-darken-2"
        :to="'/blogs/' + blog.raw.id"
      >
        <span class="font-weight-bold">Read</span>
      </v-btn>
    </template>
  </AppCard>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import AppCard from '@/components/AppCard.vue'
import { mdiPaw } from '@mdi/js'

const $props = defineProps({
  blog: {
    type: Object,
    required: true
  }
})

const author = ref({
  id: 0,
  name: $props.blog.raw.author,
  pfp: ''
})

if (!$props.blog.raw.author) {
  author.value.name = 'Trust Me Bro'
} else { // call API to get authorPfp URL
  author.value.pfp = ''
  author.value.id = 0
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}

.subtitle {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.425em;
  height: 4.275em;
}
</style>