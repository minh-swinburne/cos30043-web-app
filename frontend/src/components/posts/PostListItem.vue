<template>
  <BaseCard
    :image="post.raw.imageUrl"
    :imgLink="link" target="_blank"
    imgPos="bottom"
    elevation="5"
  >
    <template #header>
      <div class="px-5 pt-2 d-flex align-center">
        <RouterLink :to="'user/' + author.id" class="d-flex align-center">
          <v-avatar color="white" class="me-3 border">
            <v-img
              v-if="author.pfp"
              :src="author.pfp" 
              alt="Author Profile Picture"
            ></v-img>

            <v-icon v-else class="text-primary">
              {{ mdiPaw }}
            </v-icon>
          </v-avatar>

          {{ author.name }}
        </RouterLink>
        
        <v-spacer></v-spacer>
        <v-btn
          variant="flat"
          color="primary"
          :to="link" target="_blank"
          :append-icon="mdiOpenInNew"
        >
          <span class="font-weight-bold">Read</span>
        </v-btn>
      </div>
    </template>

    <template #title>
      <RouterLink :to="link" target="_blank" class="title">
        {{ post.raw.title }}
      </RouterLink>
    </template>

    <template #content>
      <div class="subtitle">
        {{ post.raw.description }}
      </div>
    </template>

    <template #actions>
      <PostVote :post="post.raw"></PostVote>
      <PostComment 
        :post="post.raw"
        size="large"
      >
        {{ post.raw.commentCount }}
      </PostComment>
      
      <v-spacer></v-spacer>
      <PostBookmark :post="post.raw"></PostBookmark>
      <PostShare :post="post.raw"></PostShare>
    </template>
  </BaseCard>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'
import apiClient from '@/services/api'

import BaseCard from '@/components/base/BaseCard'
import PostVote from '@/components/posts/PostActionVote'
import PostComment from '@/components/posts/PostActionComment'
import PostBookmark from '@/components/posts/PostActionBookmark'
import PostShare from '@/components/posts/PostActionShare'
import { mdiPaw, mdiOpenInNew } from '@mdi/js'

const $props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const authStore = useAuthStore()
const user = authStore.user
// console.log(id.value)

const link = ref('/posts/' + $props.post.raw.id + '/read')
const author = ref({})


apiClient.getUser($props.post.raw.author)
.then(response => {
  let user = response.data[0]
  // console.log(user)
  author.value = {
    id: user.id,
    name: user.firstname + ' ' + user.lastname,
    pfp: user.pfp || ''  
  }
})
.catch(error => {
  // console.error(error)
  author.value = {
    id: 0,
    name: 'Trust Me Bro',
    pfp: ''
  }
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}
a:hover {
  text-decoration: underline;
}

.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  line-height: 1.425em;
  height: 2.85em;
  text-wrap: wrap;
}

.subtitle {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  line-height: 1.425em;
  height: 4.275em;
}

.v-card {
  transition: transform .3s, box-shadow .3s;
}

.v-card:hover {
  transform: scale(1.05);
  box-shadow: 3px 2px 25px rgba(2, 129, 255, .03);
}
</style>