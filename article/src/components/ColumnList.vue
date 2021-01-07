<template>
  <div class="row">
    <div class="col-4 mb-4" v-for="column in columnList" :key="column._id">
      <div class="card h-100 shadow-sm" style="width: 18rem;">
        <div class="card-body text-center">
          <img :src="column.avatar && column.avatar.url" :alt="column.title" class="rounded-circle border border-light my-3">
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-start">{{column.description}}</p>
          <router-link :to="`/column/${column._id}`" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, computed } from 'vue'
import { ColumnProps } from '@/store'

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      // 当需要把props的类型断言时  可以使用 PropType
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(item => {
        if (!item.avatar) {
          item.avatar = {
            url: require('@/assets/column.jpg')
          }
        } else {
          item.avatar.url += '?x-oss-process=image/resize,m_pad,h_50,w_50'
        }
        return item
      })
    })

    return {
      columnList
    }
  }
})
</script>

<style lang="scss" scoped>
  .rounded-circle{
    width: 50px;
    height: 50px;
  }
</style>
