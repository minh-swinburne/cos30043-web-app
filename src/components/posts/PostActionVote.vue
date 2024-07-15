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
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

import { mdiArrowUpBold, mdiArrowUpBoldOutline, mdiArrowDownBold, mdiArrowDownBoldOutline } from '@mdi/js'

const $props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const userStore = useUserStore()
const { id } = storeToRefs(userStore)

// const votes = ref($props.post.votes)
// const score = ref($props.post.score)

const upvoted = computed(() => {
  return $props.post.votes.some(vote => vote.user === id.value && vote.type === 'upvote')
})
const downvoted = computed(() => {
  return $props.post.votes.some(vote => vote.user === id.value && vote.type === 'downvote')
})

function clearVote() {
  // console.log('clearing vote')
  const index = $props.post.votes.findIndex(vote => vote.user === id.value)
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
    user: id.value,
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
    user: id.value,
    type: 'downvote'
  })
}

watch($props.post.votes, () => {
  console.log('Votes changed')
  // call api to update votes and score
})
</script>