<template>
  <div class="container">
    <GlobalHeader :user="user"></GlobalHeader>
    <ColumnList :list="list"></ColumnList>
    <ValidateForm @form-submit="handleFormSubmit" ref="formRef">
      <ValidateInput :rules="rules"></ValidateInput>
      <ValidateInput :rules="rules"></ValidateInput>
      <button @click.prevent="reset">reset</button>
    </ValidateForm>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: '12',
    description: '2q3423432'
  },
  {
    id: 2,
    title: '12',
    description: '2q3423432'
  },
  {
    id: 3,
    title: '12',
    description: '2q3423432'
  },
  {
    id: 4,
    title: '12',
    description: '2q3423432'
  },
  {
    id: 5,
    title: '12',
    description: '2q3423432'
  }
]

const user: UserProps = {
  id: 1,
  name: '123',
  isLogin: true
}

const rules: RulesProp = [
  {
    type: 'required',
    message: '请输入邮箱'
  },
  {
    type: 'email',
    message: '邮箱格式不正确'
  }
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  setup () {
    const handleFormSubmit = (val: boolean) => {
      console.log(val)
    }

    const formRef = ref()
    const reset = () => {
      formRef.value.resetForm()
    }

    return {
      list: testData,
      user,
      rules,
      handleFormSubmit,
      reset,
      formRef
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
