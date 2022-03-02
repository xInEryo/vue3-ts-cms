import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import { IRootState, IStore } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'monster',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})

// 初始化vuex 将本地缓存内的数据放到vuex中
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStore> {
  return useVuexStore()
}

export default store
