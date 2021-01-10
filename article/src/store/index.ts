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
  name?: string;
  id?: number;
  columnId?: number;
}

export interface GlobalDataProps {
  loading: boolean;
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

export default createStore<GlobalDataProps>({
  state: {
    loading: false,
    columns: [],
    posts: [],
    user: { id: 1, name: '张三', columnId: 1, isLogin: true }
  },
  getters: {
    getPostsById: (state) => (id: string) => {
      return state.posts.filter(post => post.column === id)
    }
  },
  mutations: {
    login (state, user: UserProps) {
      state.user = { ...user, isLogin: true }
    },
    logout (state) {
      state.user = { isLogin: false }
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
    }
  },
  modules: {
  }
})
