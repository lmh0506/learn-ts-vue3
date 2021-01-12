<template>
  <teleport to='#loading-wrapper'>
  <div class="d-flex justify-content-center align-items-center h-100 loading-container" :style="{backgroundColor: background || ''}">
    <div class="loading-content">
      <div class="spinner-border text-primary" role="status"></div>
      <p v-if="text" class="text-primary small">{{text}}</p>
    </div>
  </div>
    </teleport>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import useDomCreate from '@/hooks/useDomCreate'

export default defineComponent({
  name: 'Loading',
  props: {
    text: {
      type: String
    },
    background: {
      type: String
    }
  },
  setup () {
    useDomCreate('loading-wrapper')
  }
})
</script>

<style lang="scss" scoped>
  .loading-container{
    background: rgba(0, 0, 0, .5);
    z-index: 100;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    text-align: center;
  }
</style>
