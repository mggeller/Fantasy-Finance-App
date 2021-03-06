import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ClientsIndex from '../views/Clients/Index.vue'
import ClientsCreate from '../views/Clients/Create.vue'
import ClientsDetails from '../views/Clients/Details.vue'
import StocksIndex from '../views/Stocks/Index.vue'
import StocksCreate from '../views/Stocks/Create.vue'
import StocksEdit from '../views/Stocks/Edit.vue'
import StockInClientsCreate from '../views/StockInClients/Create.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  // Clients
  {
    path: '/clients',
    name: 'Clients',
    component: ClientsIndex
  },
  {
    path: '/clients/create',
    name: 'ClientsCreate',
    component: ClientsCreate
  },
  {
    path: '/clients/details/:id?',
    name: 'ClientsDetails',
    component: ClientsDetails,
    props: true
  },
  // Stocks
  {
    path: '/stocks',
    name: 'Stocks',
    component: StocksIndex
  },
  {
    path: '/stocks/create',
    name: 'StocksCreate',
    component: StocksCreate
  },
  {
    path: '/stocks/edit/:id?',
    name: 'StocksEdit',
    component: StocksEdit,
    props: true
  },
  // StockInClients
  {
    path: '/stockinclients/create',
    name: 'StockInClientsCreate',
    component: StockInClientsCreate
  }
]

const router = new VueRouter({
  routes
})

export default router
