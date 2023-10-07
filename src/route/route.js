import { createRouter,createWebHistory } from 'vue-router'
import Dashboard from "../pages/Dashboard.vue"
import ProductList from "../pages/Products/Index.vue"
import ProductDetails from "../pages/Products/Details.vue"

const routes = [
  { path: "/", component: Dashboard },
  { path: "/products", component: ProductList },
  { path: "/product/:id", component: ProductDetails },
]

const router = createRouter({
  history:createWebHistory(),
  routes,
  linkActiveClass:"active-menu",
})

export default router