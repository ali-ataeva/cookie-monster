import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  CountriesResponseType,
  CountryOutlinesType,
  finalCoordsType,
} from "../types";

//geo data from fetches
export const useGeoDataStore = defineStore("geo", () => {
  const coords = ref<finalCoordsType[]>([]);
  const outlines = ref<CountryOutlinesType[]>([]);
  const countries = ref<CountriesResponseType[]>([]);

  return {
    coords,
    outlines,
    countries,
  };
});
