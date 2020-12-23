<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <RefCmp />
  <ReactiveCmp />
  <LifeCycle />
  <WatchCmp />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RefCmp from './components/RefCmp.vue';
import ReactiveCmp from './components/ReactiveCmp.vue';
import LifeCycle from './components/LifeCycle.vue';
import WatchCmp from './components/WatchCmp.vue';

export default defineComponent({
  name: 'App',
  components: {
    RefCmp,
    ReactiveCmp,
    LifeCycle,
    WatchCmp,
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
