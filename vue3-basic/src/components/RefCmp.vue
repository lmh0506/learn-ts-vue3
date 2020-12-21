<template>
  <div class="hello">
    <!-- 当ref作为渲染上下文的属性返回（即在setup() 返回的对象中）并在模板中使用时，它会自动解套无需在模板内额外书写.value -->
    <h4>count: {{count}}</h4>
    <h4>double: {{double}}</h4>
    <button @click="increase">click me + 1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'ref',
  // setup函数是一个新的组件选项，作为在组件内使用Composition Api 的入口点
  // 创建组件实例，然后初始化props，紧接着就调用setup函数。从生命周期钩子的视角来看，它会在beforeCreate钩子之前被调用
  setup() {
    // ref 接受一个参数值并返回一个响应式且可改变的ref对象。
    const count = ref(0);
    // computed 传入一个getter函数，返回一个默认不可手动修改的ref对象
    const double = computed(() => count.value * 2);
    const increase = () => {
    // ref对象拥有一个指向内部值的单一属性value
      count.value += 1;
    };

    // 如果setup返回一个对象，则对象的属性将会被合并到组件模板的渲染上下文
    return {
      count,
      increase,
      double,
    };
  },
});
</script>
