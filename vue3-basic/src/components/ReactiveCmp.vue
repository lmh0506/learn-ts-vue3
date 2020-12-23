<template>
  <div class="hello">
    <h4>reactive.count: {{count}}</h4>
    <h4>reactive.data.count: {{data.count}}</h4>
    <h4>reactive.double: {{double}}</h4>
    <h4>reactive.data.double: {{data.double}}</h4>
    <button @click="increase">click me + 1</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, computed, reactive, toRefs,
} from 'vue';
// 避免ts无法类型推断
interface DataProp {
  count: number;
  double: number;
  increase: () => void;
}

export default defineComponent({
  name: 'reactive',
  setup() {
    // reactive 接受一个普通对象 然后返回该普通对象的响应式代理
    // 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    // 基于 proxy 实现，返回的代理对象不等于原始对象，建议仅使用代理对象而避免依赖原始对象
    const data: DataProp = reactive({
      count: 0,
      increase: () => { data.count += 1; },
      double: computed(() => data.count * 2),
    });

    return {
      data,
      // toRefs 把一个响应式对象转换成普通对象，该普通对象的每个property都是一个ref，和响应式对象property一一对应
      // 当想要从一个组合逻辑函数中返回响应式对象时，用toRefs 是很有效的，该API让消费组件可以结构/扩展(使用...操作符)返回的对象，并不会丢失响应性
      ...toRefs(data),
    };
  },
});
</script>
