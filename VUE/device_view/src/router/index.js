import { createRouter, createWebHistory } from 'vue-router'
import AddComponent from '../components/AddComponent.vue'
import ListView from '../views/ListView.vue'

// Die verschiedenen Routen für jede Komponente werden hier definiert
const routes = [
  {
    path: '/',
    name: 'Home',
    component: ListView
  },
  {
    path: '/add',
    name: 'Add',
    component: AddComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router