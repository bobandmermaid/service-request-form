import VueRouter from 'vue-router'
import Form from '../components/Form'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Form
    },
    {
      path: '/success',
      component: () => import('../components/SuccessPage')
    }]
})

export default router
