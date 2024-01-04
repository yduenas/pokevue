import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pokemon.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-id',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PokemonID.vue'),
    props:(route)=>{
      const id = Number(route.params.id);
      return isNaN(id)?{id:1}:{id}
    } 
  }, 
  {
    path: '/:pathMatch(.*)*',
    name: 'nopagefound',
    component: () => import(/* webpackChunkName: "about" */ '../views/NoPageFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
