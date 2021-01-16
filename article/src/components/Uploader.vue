<template>
  <div class="file-upload">
    <div class="file-upload-container" @click.prevent="triggerUpload">
      <slot v-if="fileStatus === 'loading'" name="loading">
        <button class="btn btn-primary" disabled>正在上传...</button>
      </slot>
      <slot v-else-if="fileStatus === 'success'" name="uploaded" :uploadData="uploadData">
        <button class="btn btn-primary">上传成功</button>
      </slot>
      <slot v-else name="default">
        <button class="btn btn-primary">点击上传</button>
      </slot>
    </div>
    <input
      @change="handleFileChange"
      type="file"
      class="file-input d-none"
      ref="fileInput">
  </div>
</template>

<script lang='ts'>
import axios from 'axios'
import { defineComponent, ref, PropType } from 'vue'
type UploadStatus = 'ready' | 'loading' | 'success' | 'error'
type CheckFunction = (file: File) => boolean
export default defineComponent({
  name: 'Uploader',
  props: {
    action: {
      type: String,
      required: true,
      default: '/api/upload'
    },
    beforeUpload: Function as PropType<CheckFunction>
  },
  emits: ['file-uploaded', 'file-uploaded-error'],
  setup (props, context) {
    const fileInput = ref<null | HTMLInputElement>(null)
    const fileStatus = ref<UploadStatus>('ready')
    const uploadData = ref()
    const triggerUpload = () => {
      if (fileInput.value) {
        fileInput.value.click()
      }
    }

    const handleFileChange = (e: Event) => {
      const currentTarget = e.target as HTMLInputElement
      if (currentTarget.files) {
        const files = Array.from(currentTarget.files)
        if (props.beforeUpload) {
          const result = props.beforeUpload(files[0])
          if (!result) return
        }
        const formData = new FormData()
        formData.append('file', files[0])
        fileStatus.value = 'loading'

        axios.post(props.action, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(resp => {
          context.emit('file-uploaded', resp)
          uploadData.value = resp.data
          fileStatus.value = 'success'
        }).catch(err => {
          context.emit('file-uploaded-error', err)
          fileStatus.value = 'error'
        }).finally(() => {
          if (fileInput.value) {
            // 将上传文件置为空
            fileInput.value.value = ''
          }
        })
      }
    }

    return {
      fileInput,
      triggerUpload,
      handleFileChange,
      fileStatus,
      uploadData
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
