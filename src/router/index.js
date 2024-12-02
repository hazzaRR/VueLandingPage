import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import FAQ from '../views/FAQ.vue'
import Contact from '../views/Contact.vue'
import PriceList from '../views/PriceList.vue'
import Gallery from '../views/Gallery.vue'
import Shop from '../views/Shop.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/price-list',
    name: 'priceList',
    component: PriceList,
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
  },
  { 
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFoundPage,
  } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router