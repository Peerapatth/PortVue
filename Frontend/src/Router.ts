import { createMemoryHistory, createRouter } from 'vue-router'
import Portfolio from './components/Portfolio.vue'

const routes = [
  { path: '/', component: Portfolio },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})