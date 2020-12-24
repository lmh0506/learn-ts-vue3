<template>
  <div class="hello">
    <h4>mouse.x: {{position.x}}</h4>
    <h4>mouse.y: {{position.y}}</h4>
    <h4 v-if="loading">loading...</h4>
    <h4 v-else-if="error">{{error}}</h4>
    <img v-else :src="result.message" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, watch,
} from 'vue';
import useMousePostion from '@/hooks/useMousePostion';
import useUrlLoader from '@/hooks/useUrlLoader';

interface IdogResult {
  message: string;
  status: string;
}

export default defineComponent({
  name: 'MouseTrace',
  props: {
    name: String,
  },
  // 不要解构 props 对象，那样会使其失去响应性：
  // attrs 和 slots 都是内部组件实例上对应项的代理，可以确保在更新后仍然是最新值。所以可以解构，无需担心后面访问到过期的值
  // setup({name}, {attrs, emit, slots})
  setup(props, { emit }) {
    // setup接收 props 作为其第一个参数：
    console.log(props.name);
    // 第二个参数提供了一个上下文对象，从原来 2.x 中 this 选择性地暴露了一些 property。
    // context.attrs
    // context.emit
    // context.slots

    // this 在 setup() 中不可用。由于 setup() 在解析 2.x 选项前被调用，setup() 中的 this 将与 2.x 选项中的 this 完全不同。
    // 同时在 setup() 和 2.x 选项中使用 this 时将造成混乱。
    // 在 setup() 中避免这种情况的另一个原因是：这对于初学者来说，混淆这两种情况的 this 是非常常见的错误：
    console.log(this);
    emit('test');
    const { position } = useMousePostion();
    const {
      result, loading, loaded, error,
    } = useUrlLoader<IdogResult>('https://dog.ceo/api/breeds/image/random');

    watch(result, (newVal, oldVal) => {
      console.log(newVal?.message, oldVal?.message);
    });

    return {
      position,
      result,
      loading,
      loaded,
      error,
    };
  },
});
</script>
