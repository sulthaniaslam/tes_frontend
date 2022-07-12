import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/pages/Layout.vue'),
    children: [
      {
        path: '/item',
        name: 'item',
        component: () => import('../views/pages/Item.vue')
      },
      {
        path: '/item/tambah',
        name: 'item-tambah',
        component: () => import('../views/pages/ItemTambah.vue')
      },
      {
        path: '/customer',
        name: 'customer',
        component: () => import('../views/pages/Customer.vue')
      },
      {
        path: '/customer/tambah',
        name: 'customer-tambah',
        component: () => import('../views/pages/CustomerTambah.vue')
      },
      {
        path: '/sales',
        name: 'sales',
        component: () => import('../views/pages/Sales.vue')
      },
      {
        path: '/sales/tambah',
        name: 'sales-tambah',
        component: () => import('../views/pages/SalesTambah.vue')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
