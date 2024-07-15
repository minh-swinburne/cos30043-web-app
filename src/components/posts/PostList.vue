<template>
  <v-data-iterator
    :items="posts"
    :items-per-page="itemsPerPage"
    :loading="loading"
  >
    <template #header>
      <h1 class="d-flex justify-space-between mb-4 align-center">
        <div class="text-truncate">
          {{ name }}
        </div>

        <div class="d-flex align-center" v-if="!sm">
          <SeeAllButton :source="source" />
        </div>
      </h1>
    </template>

    <template v-slot:default="{ items }">
      <v-container fluid class="pa-0">
        <v-row>
          <v-col
            v-for="post in items"
            :key="post.id"
            cols="12"
            xl="3"
            lg="4"
            md="6"
          >
            <PostListItem :post="post" />
          </v-col>
        </v-row>
      </v-container>
    </template>

    <template
      v-if="!sm"
      #footer="{ page, pageCount, prevPage, nextPage }"
    >
      <div class="d-flex align-center justify-center pa-4">
        <v-btn
          :disabled="page === 1"
          :icon="mdiArrowLeft"
          variant="tonal"
          rounded
          @click="prevPage"
        ></v-btn>

        <div class="mx-5">
          {{ page }}
        </div>

        <v-btn
          :disabled="page === pageCount"
          :icon="mdiArrowRight"
          variant="tonal"
          rounded
          @click="nextPage"
        ></v-btn>
      </div>
    </template>

    <template #footer v-else>
      <div class="d-flex align-center justify-center pa-4">
        <SeeAllButton :source="source" />
      </div>
    </template>

    <template #loader>
      <v-row>
        <v-col
          v-for="n in itemsPerPage"
          :key="n"
          cols="12"
          xl="3"
          lg="4"
          md="6"
        >
          <v-skeleton-loader
            class="border post-loader"
            type="avatar, chip, ossein, button,
              heading@2, paragraph, image, 
              chip@2, ossein, avatar@2"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import apiClient from '@/services/api'

import PostListItem from './PostListItem'
import SeeAllButton from './PostListButtonSeeAll'
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'

const $emit = defineEmits(['fail'])
const $props = defineProps({
  name: String,
  source: {
    type: String,
    required: true
  }
})

// 960, 1280, and 1920 breakpoints
const { sm, md, lg, xlAndUp } = useDisplay()
const posts = ref([])
const loading = ref(true)

const itemsPerPage = computed(() => {
  if (md.value) {
    return 2
  }
  if (xlAndUp.value) {
    return 4
  }
  return 3
})

apiClient.getPosts($props.source, sm.value ? 2 : 0)
.then(response => {
  posts.value = response.data
  loading.value = false
})
.catch((error) => {
  console.log(error)
  $emit('fail')
})
</script>

<style>
.post-loader .v-skeleton-loader__button + .v-skeleton-loader__bone {
  flex-basis: 100%;
  margin-inline-start: 16px;
  margin-bottom: 0 !important;
}
.post-loader .v-skeleton-loader__image {
  height: 240px !important;
}
</style>