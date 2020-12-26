<template>
  <h4 v-if="err">error: {{err}}</h4>
  <Suspense>
    <template #default>
      <!-- Suspense内只能有一个根节点 -->
      <div>
        <!-- Suspense会等两个异步组件全部加载完成后一起显示 -->
        <AsyncShow></AsyncShow>
        <AsyncDog></AsyncDog>
      </div>
    </template>
    <!-- 组件加载中显示的状态 -->
    <template #fallback>
      <h4>Loading...</h4>
    </template>
  </Suspense>
  <RefCmp />
  <ReactiveCmp />
  <LifeCycle />
  <WatchCmp />
  <MouseTrace />
  <MyModal :isOpen="isOpen" @close-modal="closeModal" @send-msg="getMsg"/>
  <button @click="openModal">打开弹窗</button>
</template>

<script lang="ts">
import { defineComponent, ref, onErrorCaptured } from 'vue';
import RefCmp from './components/RefCmp.vue';
import ReactiveCmp from './components/ReactiveCmp.vue';
import LifeCycle from './components/LifeCycle.vue';
import WatchCmp from './components/WatchCmp.vue';
import MouseTrace from './components/MouseTrace.vue';
import MyModal from './components/MyModal.vue';
import AsyncShow from './components/AsyncShow.vue';
import AsyncDog from './components/AsyncDog.vue';

export default defineComponent({
  name: 'App',
  setup() {
    const isOpen = ref(false);
    const err = ref(null);

    const closeModal = () => {
      isOpen.value = false;
    };
    const openModal = () => {
      isOpen.value = true;
    };
    const getMsg = (e: any, msg: any) => {
      console.log('parent', e, msg);
    };

    onErrorCaptured((e: any) => {
      // 捕获异步组件内的异常信息
      err.value = e;
    });

    return {
      isOpen,
      closeModal,
      openModal,
      getMsg,
      err,
    };
  },
  components: {
    RefCmp,
    ReactiveCmp,
    LifeCycle,
    WatchCmp,
    MouseTrace,
    MyModal,
    AsyncShow,
    AsyncDog,
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
