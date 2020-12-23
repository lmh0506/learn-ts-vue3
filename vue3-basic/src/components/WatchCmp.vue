<template>
  <div class="hello">
    <h4>str: {{str}}</h4>
    <h4>count: {{count}}</h4>
    <button @click="watchHello">hello</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, watch, reactive,
} from 'vue';

export default defineComponent({
  name: 'reactive',
  setup() {
    const str = ref('');
    const count = ref(0);
    const data = reactive({
      name: '111',
      value: 222,
    });
    document.title = 'watch';

    const watchHello = () => {
      str.value += 'watch! ';
    };

    // watch API 完全等效于 2.x this.$watch （以及 watch 中相应的选项）。
    // watch 需要侦听特定的数据源，并在回调函数中执行副作用。默认情况是懒执行的，也就是说仅在侦听的源变更时才执行回调。
    // 监听单个值
    watch(str, (newVal, oldVal) => {
      console.log('newVal', newVal);
      console.log('oldVal', oldVal);
      document.title += str.value;
    });

    // 监听多个值 返回也是多个值的数组,  使用 getter 的写法 watch reactive 对象中的一项
    watch([str, count, () => data.name], (newVal, oldVal) => {
      console.log('newVal', newVal);
      console.log('oldVal', oldVal);
      document.title += str.value;
    });

    return {
      str,
      count,
      watchHello,
    };
  },
});
</script>
