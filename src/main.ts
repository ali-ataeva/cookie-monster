import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import { getGeoData } from "./services/geoData";
import { useGeoDataStore } from "./stores/geoDataStore";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);

const geoDataStore = useGeoDataStore();

(async () => {
  const { finalCoords, finalOutlines, finalCountries } = await getGeoData();
  geoDataStore.coords = finalCoords;
  geoDataStore.outlines = finalOutlines;
  geoDataStore.countries = finalCountries;

  app.mount("#app");
})();
