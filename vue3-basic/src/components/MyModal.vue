<template>
  <teleport to='#modal'>
    <div id="center" v-if="isOpen">
      <h1><slot>我是弹窗</slot></h1>
      <button @click="closeModal($event)">关闭</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isOpen: Boolean,
  },
  // 声明该组件的传递的事件  如果传递的事件与声明的事件不同会有警告
  // emits可以是事件名称的字符串数组
  // 也可以是一个事件名作为键的对象，每个属性的值可以是null也可以是validator函数
  // 验证函数将接受传递给$emit调用的附加参数
  // emits: ['close-modal'],
  emits: {
    'close-modal': null,
    'send-msg': (...args: [MouseEvent, string]) => {
      console.log(args);
      // 如果传递的参数不符合校验会抛出警告
      if (typeof args[1] === 'string') {
        return true;
      }
      return false;
    },
  },
  setup(props, context) {
    const closeModal = (e: MouseEvent) => {
      console.log(e);
      context.emit('close-modal');
      context.emit('send-msg', e, 'msg');
    };
    return {
      closeModal,
    };
  },
});
</script>

<style>
  #center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }
</style>
