<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">文章专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2">登录</router-link>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="`你好 ${user.nickName}`">
          <DropdownItem>
            <router-link to="/create" class="dropdown-item">新建文章</router-link>
          </DropdownItem>
          <DropdownItem>
            <a class="dropdown-item" href="#">编辑资料</a>
          </DropdownItem>
          <DropdownItem>
            <div class="dropdown-item" @click="logout">退出登录</div>
          </DropdownItem>
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang='ts'>
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import { defineComponent, computed } from 'vue'
import { GlobalDataProps } from '@/store/index'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const user = computed(() => store.state.user)
    const logout = () => store.commit('logout')

    return {
      user,
      logout
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
