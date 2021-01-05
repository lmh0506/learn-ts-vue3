<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50"/>
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
    <!-- <button
      class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25"
       @click="loadMorePage" v-if="!isLastPage"
    >
      加载更多
    </button> -->

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
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
  name: 'Home',
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
