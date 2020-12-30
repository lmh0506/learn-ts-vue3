<template>
  <div class="container">
    <GlobalHeader :user="user"></GlobalHeader>
    <ColumnList :list="list"></ColumnList>
    <ValidateInput :rules="rules"></ValidateInput>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
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
    ValidateInput
  },
  setup () {
    return {
      list: testData,
      user,
      rules
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
