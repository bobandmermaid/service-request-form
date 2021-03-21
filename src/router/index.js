import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../components/Form'

Vue.use(VueRouter)

// Адрес домашней страницы и успешная отправка заявки
const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
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
