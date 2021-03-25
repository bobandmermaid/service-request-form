import Vue from 'vue'
import VueRouter from 'vue-router'
import FormServiceRequest from '../components/FormServiceRequest'

Vue.use(VueRouter)

// Адрес домашней страницы и успешная отправка заявки
const routes = [
  {
    path: '/',
    name: 'FormServiceRequest',
    component: FormServiceRequest
  },
  {
    path: '/success',
    component: () => import('../components/SuccessPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
