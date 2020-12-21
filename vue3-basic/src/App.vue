<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <RefCmp />
  <ReactiveCmp />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RefCmp from './components/RefCmp.vue';
import ReactiveCmp from './components/ReactiveCmp.vue';

export default defineComponent({
  name: 'App',
  components: {
    RefCmp,
    ReactiveCmp,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
