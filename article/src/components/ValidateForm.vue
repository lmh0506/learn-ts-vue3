<template>
  <form class="validate-form-container">
    <slot></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang='ts'>
import { defineComponent, onUnmounted } from 'vue'
import { EmitData, InputRef } from './ValidateInput.vue'
import mitt from 'mitt'

export const emitter = mitt()

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup (props, context) {
    const validFns: any[] = []
    const validInputs: InputRef[] = []
    const submitForm = () => {
      const result = validFns.map(fn => fn()).every(res => res)
      context.emit('form-submit', result)
    }

    const resetForm = () => {
      validInputs.forEach(input => {
        input.val = ''
        input.error = false
        input.message = ''
      })
    }

    const callback = (data: EmitData | undefined) => {
      if (data) {
        validFns.push(data.validateInput)
        validInputs.push(data.inputRef)
      }
    }

    emitter.on('form-item-create', callback)

    onUnmounted(() => {
      emitter.off('form-item-create', callback)
    })

    return {
      submitForm,
      resetForm
    }
  }
})
</script>
