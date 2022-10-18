import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TaskIDList from '../views/TaskIDList.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/:list',
    component: TaskIDList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
