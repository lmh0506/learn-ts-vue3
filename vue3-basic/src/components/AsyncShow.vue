<template>
  <h4>{{result}}</h4>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // 定义一个包含异步请求的组件，在 setup 返回一个 Promise
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          result: 'hello',
        });
      }, 3000);
    });
  },
});
</script>
