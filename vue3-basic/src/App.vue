<template>
  <RefCmp />
  <ReactiveCmp />
  <LifeCycle />
  <WatchCmp />
  <MouseTrace @test="test" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RefCmp from './components/RefCmp.vue';
import ReactiveCmp from './components/ReactiveCmp.vue';
import LifeCycle from './components/LifeCycle.vue';
import WatchCmp from './components/WatchCmp.vue';
import MouseTrace from './components/MouseTrace.vue';

export default defineComponent({
  name: 'App',
  methods: {
    test() {
      console.log(111);
    },
  },
  components: {
    RefCmp,
    ReactiveCmp,
    LifeCycle,
    WatchCmp,
    MouseTrace,
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
