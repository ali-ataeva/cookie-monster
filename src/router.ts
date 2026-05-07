import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import GeographyView from "./views/GeographyView.vue";
import { useBombStore } from "./stores/bombStore";

const routes = [
  { path: "/", component: HomeView, name: "home" },
  {
    path: "/geoguesser",
    component: GeographyView,
    name: "geo",
    beforeEnter: () => {
      const bombStore = useBombStore();
      if (!bombStore.current) {
        return { name: "home" };
      }
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
