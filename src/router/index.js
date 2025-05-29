import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' //importa la pagina web
import EstudianteView from '@/views/EstudianteView.vue'
import ProductoView from '@/views/ProductoView.vue' 
import PreguntaView  from '@/views/PreguntaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },/**de las dos paginas configuracion */
  {
    path: '/estudiante/:cedula',
    name: 'estudianteView',
    component: EstudianteView
  },
  {
    path: '/producto',
    name: 'productoView',
    component: ProductoView
  },
  {
    path: '/pregunta',
    name: 'preguntaView',
    component: PreguntaView
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
    path: '/contador/numeros',
    name: 'contadorview',
    component: () => import('@/views/ContadorView.vue')
  },
  {
    path: '/chiste',
    name: 'chisteView',
    component: () => import('@/views/ChisteView.vue')
  },
  {
    path: '/estudiante/tabla',
    name: 'tablaEstudiante',
    component: () => import('@/views/EstudianteTablaView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
