<template>
  <div class="dropdown" ref="dropdownRef">
    <a class="btn btn-outline-light my-2 dropdown-toggle" href="#" @click="toggleOpen">{{title}}</a>
    <div class="dropdown-menu" :style="menuStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, computed, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const isClickOutside = useClickOutside(dropdownRef)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }

    const menuStyle = computed(() => {
      return { display: isOpen.value ? 'block' : 'none' }
    })

    watch(isClickOutside, val => {
      if (val && isOpen.value) {
        isOpen.value = false
      }
    })

    return {
      isOpen,
      toggleOpen,
      menuStyle,
      dropdownRef
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
