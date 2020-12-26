<template>
  <img :src="result && result.message" alt="">
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  // 使用 async await 改造一下异步请求
  async setup() {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    return {
      result: res.data,
    };
  },
});
</script>
