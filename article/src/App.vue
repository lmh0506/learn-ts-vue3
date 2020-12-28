<template>
  <div class="container">
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList'
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

export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
