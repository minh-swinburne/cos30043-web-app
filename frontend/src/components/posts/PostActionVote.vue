<template>
  <v-hover v-slot="{ isHovering, props }"> 
    <v-btn
      v-bind="props"
      :icon="upvoted ? mdiArrowUpBold : mdiArrowUpBoldOutline"
      @click="upvote"
    ></v-btn>
    <span :class="{ 'text-primary': isHovering }">
      {{ post.score }}
    </span>
    <v-btn 
      v-bind="props"
      :icon="downvoted ? mdiArrowDownBold : mdiArrowDownBoldOutline"
      @click="downvote"
      class="ms-0"
    ></v-btn>
  </v-hover>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useAuthStore } from '@/stores'

import { mdiArrowUpBold, mdiArrowUpBoldOutline, mdiArrowDownBold, mdiArrowDownBoldOutline } from '@mdi/js'

const $props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const authStore = useAuthStore()
const user = authStore.user
// console.log($props.post)

// const votes = ref($props.post.votes)
// const score = ref($props.post.score)

const upvoted = computed(() => {
  return $props.post.votes.some(vote => vote.user === user?.id && vote.type === 'upvote')
})
const downvoted = computed(() => {
  return $props.post.votes.some(vote => vote.user === user?.id && vote.type === 'downvote')
})

function clearVote() {
  // console.log('clearing vote')
  const index = $props.post.votes.findIndex(vote => vote.user === user.id)
  if (index === -1) {
    return 0
  }
  const vote = $props.post.votes.splice(index, 1)[0]
  if (vote.type === 'upvote') {
    $props.post.score -= 1
    return -1
  } else {
    $props.post.score += 1
    return 1
  }
}

function upvote() {
  // console.log('upvoting')
  if (clearVote() === -1) {
    return
  }
  $props.post.score += 1
  $props.post.votes.push({
    user: user.id,
    type: 'upvote'
  })
}

function downvote() {
  // console.log('downvoting')
  if (clearVote() === 1) {
    return
  }
  $props.post.score -= 1
  $props.post.votes.push({
    user: user.id,
    type: 'downvote'
  })
}

watch($props.post.votes, () => {
  console.log('Votes changed')
  // call api to update votes and score
})
</script>