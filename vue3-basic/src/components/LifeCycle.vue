<template>
  <div class="hello">
    {{count}}
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, onUpdated, onRenderTracked, onRenderTriggered, ref,
} from 'vue';
// vue2 -> vue3 生命周期函数变化
// beforeCreate -> use setup()
// created -> use setup()
// beforeMount -> onBeforeMount
// mounted -> onMounted
// beforeUpdate -> onBeforeUpdate
// updated -> onUpdated
// beforeDestroy -> onBeforeUnmount
// destroyed -> onUnmounted
// actived -> onActivated
// deactivated -> onDeactivated
// errorCaptured -> onErrorCaptured

// 新增的生命周期函数
// onRenderTracked
// onRenderTriggered

export default defineComponent({
  name: 'LifeCycle',
  setup() {
    const count = ref(0);
    setTimeout(() => {
      count.value += 1;
    }, 1000);
    onMounted(() => {
      console.log('mounted');
    });
    onUpdated(() => {
      console.log('updated');
    });
    onRenderTracked((e) => {
      // 检查哪个依赖性导致组件重新渲染
      console.log('onRenderTracked', e);
    });
    onRenderTriggered((e) => {
      // 检查哪个依赖性导致组件重新渲染
      console.log('onRenderTriggered', e);
    });
    return {
      count,
    };
  },
});
</script>
