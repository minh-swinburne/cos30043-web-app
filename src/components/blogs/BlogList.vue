<template>
  <v-data-iterator
    :items="blogs"
    :items-per-page="3"
    :loading="loading"
  >
    <template #header>
      <h1 class="text-h5 font-weight-bold d-flex justify-space-between mb-4 align-center">
        <div class="text-truncate">
          {{ name }}
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
            sm="6"
          >
            <BlogListItem :blog="blog" />
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
          sm="6"
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
import axios from 'axios'
import BlogListItem from './BlogListItem.vue'
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'

const $router = useRouter()

const $props = defineProps({
  name: String,
  source: {
    type: String,
    required: true
  }
})

const blogs = ref([])
const loading = ref(true)

getBlogs()

function seeAll() {
  $router.push('/blogs')
}

function getBlogs() {
  console.log($props.source)
  axios.get($props.source)
    .then(response => {
      let articles = response.data.articles.filter(article => article.urlToImage != null && article.title != "[Removed]")
      // console.log(articles)
      let id = 0
      for (const article of articles) {
        // console.log(article)
        blogs.value.push({
          id: id,
          title: article.title,
          subtitle: article.description,
          // url: article.url,
          imageUrl: article.urlToImage,
        })
        id++
      }
      loading.value = false
    })
    .catch(error => {
      console.log(error)
    });
}

watch(() => blogs, (newVal) => {
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