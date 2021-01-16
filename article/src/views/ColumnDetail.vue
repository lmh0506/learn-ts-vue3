<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar && column.avatar.url" :alt="column.title" class="rounded-circle border w-100">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import PostList from '@/components/PostList.vue'
import { ColumnProps, PostProps } from '@/store'
import axios from 'axios'

export default defineComponent({
  components: {
    PostList
  },
  setup () {
    const route = useRoute()
    const currentId = route.params.id
    const column = ref<ColumnProps>()
    const list = ref<PostProps[]>([])

    axios.get('/api/columns/' + currentId).then(res => {
      console.log(res)
      column.value = res.data
    })

    axios.get('/api/columns/' + currentId + '/posts').then(res => {
      console.log(res)
      list.value = res.data.list
    })

    return {
      column,
      list
    }
  }
})
</script>
