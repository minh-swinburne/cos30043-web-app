<template>
  <v-data-iterator
    :items="blogs"
    :items-per-page="3"
  >
    <template #header>
      <h1 class="text-h5 font-weight-bold d-flex justify-space-between mb-4 align-center">
        <div class="text-truncate">
          Recommended
        </div>

        <div class="d-flex align-center">
          <v-btn
            variant="text"
            :append-icon="mdiArrowRight"
            @click="seeAll"
          >
            <span class="text-decoration-underline text-none">
              See all
            </span>
          </v-btn>
        </div>
      </h1>
    </template>

    <template v-slot:default="{ items }">
      <v-container fluid class="pa-2">
        <v-row>
          <v-col
            v-for="blog in items"
            :key="blog.id"
            cols="auto"
            md="4"
          >
            <BlogItem :blog="blog" />
          </v-col>
        </v-row>
      </v-container>
    </template>

    <template #footer="{ page, pageCount, prevPage, nextPage }">
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

    <template #loader>
      <v-row>
        <v-col
          v-for="n in 3"
          :key="n"
          cols="auto"
          md="4"
        >
          <v-skeleton-loader
            class="border"
            type="card-avatar, article, button"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router';
import BlogItem from './BlogItem.vue'
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'

const $router = useRouter()

const $props = defineProps({
  blogs: {
    type: Array,
    required: true
  }
})

const loading = ref(true)

function seeAll() {
  $router.push('/blogs')
}

watch(() => $props.blogs, (newVal) => {
  if (newVal.length > 0) {
    loading.value = false
  }
})
</script>

<style>
.v-skeleton-loader__image {
  height: 240px !important;
}
</style>