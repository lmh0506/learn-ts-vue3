<template>
  <teleport to='#message'>
    <div v-if="isShow" class="alert alert-dismissible message-info fixed-top w-50 mx-auto justify-content-between mt-2" :class="classObject">
      <span>{{message}}</span>
      <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close" @click.prevent="hide"></button>
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref } from 'vue'
import useDomCreate from '@/hooks/useDomCreate'
export type MessageType = 'success' | 'error' | 'default'

export default defineComponent({
  name: 'Message',
  props: {
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    },
    message: String
  },
  setup (props) {
    const isShow = ref(true)
    useDomCreate('message')

    const classObject = {
      'alert-success': props.type === 'success',
      'alert-danger': props.type === 'error',
      'alert-primary': props.type === 'default'
    }

    const hide = () => {
      isShow.value = false
    }

    return {
      hide,
      isShow,
      classObject
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
