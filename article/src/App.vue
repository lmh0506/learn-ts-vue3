<template>
  <div class="container">
    <GlobalHeader :user="user"></GlobalHeader>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: '12',
    description: '2q3423432'
  },
  {
    id: 2,
    title: '12',
    description: '2q3423432'
  },
  {
    id: 3,
    title: '12',
    description: '2q3423432'
  },
  {
    id: 4,
    title: '12',
    description: '2q3423432'
  },
  {
    id: 5,
    title: '12',
    description: '2q3423432'
  }
]

const user: UserProps = {
  id: 1,
  name: '123',
  isLogin: true
}

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      list: testData,
      user
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
