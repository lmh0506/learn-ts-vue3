import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from '../../testData'

interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

export default createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { id: 1, name: '张三', columnId: 1, isLogin: true }
  },
  getters: {
    biggerColumnsLen (state) {
      return state.columns.filter(item => item.id > 2)
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find(c => c.id === id)
    },
    getPostsById: (state) => (id: number) => {
      return state.posts.filter(post => post.columnId === id)
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
    }
  },
  actions: {
  },
  modules: {
  }
})
