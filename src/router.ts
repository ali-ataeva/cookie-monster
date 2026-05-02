import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import GeographyView from "./views/GeographyView.vue";

const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/geoguesser", component: GeographyView, name: "geo" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
