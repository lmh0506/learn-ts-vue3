<template>
  <div class="container">
    <Loading v-if="loading" text="拼命加载中"></Loading>
    <GlobalHeader></GlobalHeader>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-line mb-0">
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, watch } from 'vue'
import GlobalHeader from '@/components/GlobalHeader.vue'
import Loading from '@/components/Loading.vue'
import { useStore } from 'vuex'
import createMessage from '@/components/createMessage'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loading
  },
  setup () {
    const store = useStore()
    const loading = computed(() => store.state.loading)
    const error = computed(() => store.state.error)

    watch(error, (val) => {
      const { status, message } = val
      console.log(val)
      if (status && message) {
        createMessage(message, 'error')
      }
    })
    return {
      loading,
      error
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
