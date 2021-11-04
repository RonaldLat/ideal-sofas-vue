import { createRouter, createWebHistory } from "vue-router";
import HomePage from './../views/Home.vue'

let routes = [
  { path: '/', component: HomePage },
  {
    path: '/:categoryName',
    component: () => import ( "./../views/Categories.vue"),
    props: true
  },
  {
    path: '/details/:product',
    component: () => import ( "./../views/Details.vue"),
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
