import {createRouter,createWebHashHistory} from "vue-router";



const routes = [
  {
    path:'',
    component: () => import('../views/home/index.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

