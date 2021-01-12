import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

axios.interceptors.request.use(config => {
  store.commit('setError', { status: false })
  store.commit('setLoading', true)
  return config
})
axios.interceptors.response.use(config => {
  store.commit('setLoading', false)
  return config.data
}, e => {
  const { error } = e.response.data
  store.commit('setError', { status: true, message: error })
  store.commit('setLoading', false)
  return Promise.reject(error)
})

createApp(App).use(store).use(router).mount('#app')
