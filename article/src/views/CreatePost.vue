<template>
  <div class="create-post-page">
    <h4>{{'新建文章'}}</h4>
    <uploader
      :beforeUpload="beforeUpload"
      @file-uploaded="onFileUploaded"
      class="d-flex align-items-center justify-content-center bg-light text-secondary w-100 my-4"
    >
      <h2>点击上传头图</h2>
      <template #loading>
        <div class="d-flex">
          <div class="spinner-border text-secondary" role="status">
            <span class="sr-only"></span>
          </div>
          <h2>正在上传</h2>
        </div>
      </template>
      <template #uploaded="dataProps">
        <div class="uploaded-area">
          <img :src="dataProps.uploadData.url">
          <h3>点击重新上传</h3>
        </div>
      </template>
    </uploader>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <validate-input
          :rules="titleRules" v-model="titleVal"
          placeholder="请输入文章标题"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <validate-input
          rows="10"
          tag="textarea"
          placeholder="请输入文章详情"
          :rules="contentRules"
          v-model="contentVal"
        />
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">{{'发表文章'}}</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { GlobalDataProps, ResponseType, ImageProps } from '../store'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
import Uploader from '../components/Uploader.vue'
import createMessage from '@/components/createMessage'
import { beforeUploadCheck } from '@/utils/helper'

export default defineComponent({
  name: 'CreatePost',
  components: {
    ValidateInput,
    ValidateForm,
    Uploader
  },
  setup () {
    const titleVal = ref('')
    const router = useRouter()
    // const route = useRoute()
    let imageId = ''

    const store = useStore<GlobalDataProps>()

    const titleRules: RulesProp = [
      { type: 'required', message: '文章标题不能为空' }
    ]
    const contentVal = ref('')
    const contentRules: RulesProp = [
      { type: 'required', message: '文章详情不能为空' }
    ]

    const onFormSubmit = (result: boolean) => {
      if (!imageId) {
        createMessage('请先上传图片', 'error')
      }
      if (result) {
        const user = store.state.user
        store.dispatch('createPost', {
          title: titleVal.value,
          content: contentVal.value,
          image: imageId
        }).then(() => {
          router.push('/column/' + user.column)
        })
      }
    }

    const beforeUpload = (file: File) => {
      const result = beforeUploadCheck(file, { format: ['image/jpeg', 'image/png'], size: 1024 * 1024 })
      const { error, passed } = result
      if (!passed) {
        if (error === 'format') {
          createMessage('图片格式不正确', 'error')
        } else if (error === 'size') {
          createMessage('图片大小不能超过1m', 'error')
        }
      }
      return passed
    }

    const onFileUploaded = (rawData: ResponseType<ImageProps>) => {
      if (rawData.data._id) {
        imageId = rawData.data._id
      }
    }

    return {
      titleRules,
      titleVal,
      contentVal,
      contentRules,
      onFormSubmit,
      beforeUpload,
      onFileUploaded
    }
  }
})
</script>
<style>
.create-post-page .file-upload-container {
  height: 200px;
  cursor: pointer;
  overflow: hidden;
}
.create-post-page .file-upload-container h2{
  line-height: 200px;
}
.create-post-page .file-upload-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.uploaded-area {
  position: relative;
}
.uploaded-area:hover h3 {
  display: block;
}
.uploaded-area h3 {
  display: none;
  position: absolute;
  color: #999;
  text-align: center;
  width: 100%;
  top: 50%;
}
</style>
