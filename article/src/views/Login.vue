<template>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">登录</h5>
    <validate-form @form-submit="handleFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules" v-model="emailVal"
          placeholder="请输入邮箱地址"
          type="text"
          ref="inputRef"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          type="password"
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="passwordVal"
        />
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large">登录</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store'
import createMessage from '@/components/createMessage'

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const emailVal = ref('')
    const router = useRouter()
    const emailRules: RulesProp = [
      {
        type: 'required',
        message: '请输入邮箱'
      },
      {
        type: 'email',
        message: '邮箱格式不正确'
      }
    ]
    const passwordVal = ref('')
    const passwordRules: RulesProp = [
      {
        type: 'required',
        message: '密码不能为空'
      }
    ]

    const handleFormSubmit = (val: boolean) => {
      if (val) {
        store.dispatch('login', {
          email: emailVal.value,
          password: passwordVal.value
        }).then(() => {
          createMessage('登录成功2秒后跳转首页', 'success')
          setTimeout(() => {
            router.push('/')
          }, 2000)
        })
      }
    }

    return {
      emailVal,
      emailRules,
      passwordVal,
      passwordRules,
      handleFormSubmit
    }
  }
})
</script>
