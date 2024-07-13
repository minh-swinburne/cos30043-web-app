<template>
  <v-container fluid class="my-5">
    <v-row>
      <v-col cols="12">
        <BlogList :blogs="blogs" :loading="loading" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import BlogList from '@/components/blogs/BlogList.vue';

const blogs = ref([]);
const loading = ref(true);

var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-06-12&' +
          'sortBy=popularity&' +
          'apiKey=f47fe6119dfc4592ae04366502ae2ffd'
getBlogs(url);

function getBlogs(url) {
  console.log(url)
  axios.get(url)
    .then(response => {
      let articles = response.data.articles.filter(article => article.urlToImage != null && article.title != "[Removed]")
      // console.log(articles)
      let id = 0
      for (const article of articles) {
        console.log(article)
        blogs.value.push({
          id: id,
          title: article.title,
          subtitle: article.description,
          imageUrl: article.urlToImage
        })
        console.log(article)
        id++
      }
      loading.value = false
    })
    .catch(error => {
      console.log(error)
    });
}
</script>