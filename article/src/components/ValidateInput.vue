<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.val"
      @input="updateValue"
      @blur="validateInput"
      v-bind="$attrs">
      <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive } from 'vue'
import { emitter } from './ValidateForm.vue'
const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}

export interface InputRef {
  val: any;
  error: boolean;
  message: string;
}

export interface EmitData {
  validateInput: () => boolean;
  inputRef: InputRef;
}

export type RulesProp = RuleProp[]

export default defineComponent({
  name: 'ValidateInput',
  // 拒绝组件根元素继承attribute
  inheritAttrs: false,
  props: {
    rules: {
      type: Array as PropType<RulesProp>
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup (props, context) {
    const inputRef = reactive<InputRef>({
      val: props.modelValue,
      error: false,
      message: ''
    })

    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    const EmitData: EmitData = {
      validateInput,
      inputRef
    }
    emitter.emit('form-item-create', EmitData)

    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
