import { defineStore } from "pinia";
import { ref } from "vue";
import type { WeaponType } from "../types";

//current bomb store
export const useBombStore = defineStore("bomb", () => {
  const current = ref<WeaponType | null>(null);

  return {
    current,
  };
});
