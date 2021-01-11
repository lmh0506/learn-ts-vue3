import { createStore } from 'vuex'
import axios from 'axios'

export interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
}

export interface PostProps {
  _id: string;
  title: string;
  content?: string;
  excerpt?: string;
  image?: ImageProps;
  createdAt: string;
  column: string;
}

export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}

interface UserProps {
  isLogin: boolean;
  nickName?: string;
  _id?: number;
  email?: string;
  description?: string;
  column?: number;
  avatar?: ImageProps;
}

export interface GlobalDataProps {
  token: string;
  loading: boolean;
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

export default createStore<GlobalDataProps>({
  state: {
    token: localStorage.getItem('article_token') || '',
    loading: false,
    columns: [],
    posts: [],
    user: { isLogin: false, ...JSON.parse(localStorage.getItem('article_user') || JSON.stringify({})) }
  },
  getters: {
    getPostsById: (state) => (id: string) => {
      return state.posts.filter(post => post.column === id)
    }
  },
  mutations: {
    logout (state) {
      state.user = { isLogin: false }
    },
    setToken (state, token) {
      localStorage.setItem('article_token', token)
      state.token = token
    },
    setUser (state, user) {
      const data = { ...user, isLogin: true }
      localStorage.setItem('article_user', JSON.stringify(data))
      state.user = data
    },
    createPost (state, newPost: PostProps) {
      state.posts.push(newPost)
    },
    fetchColumns (state, rawData) {
      state.columns = rawData
    },
    setLoading (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    async fetchColumns (context) {
      const { data } = await axios.get('/api/columns')
      context.commit('fetchColumns', data.list)
    },
    async login ({ commit, dispatch }, payload) {
      const { data } = await axios.post('/api/user/login', payload)
      axios.defaults.headers.common.Authorization = 'Bearer ' + data.token
      commit('setToken', data.token)
      dispatch('getCurrentUser')
    },
    async getCurrentUser ({ commit }) {
      const { data } = await axios.get('/api/user/current')
      commit('setUser', data)
    }
  },
  modules: {
  }
})
