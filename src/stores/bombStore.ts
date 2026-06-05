import { defineStore } from "pinia";
import { ref } from "vue";
import type { WeaponType } from "../types";

//current bomb store
export const useBombStore = defineStore("bomb", () => {
  const stored = localStorage.getItem("currentBomb");
  const initial = stored ? JSON.parse(stored) : null;
  const current = ref<WeaponType | null>(initial);

  function setBomb(weapon: WeaponType) {
    current.value = weapon;
    localStorage.setItem("currentBomb", JSON.stringify(weapon));
  }

  function clearBomb() {
    current.value = null;
    localStorage.removeItem("currentBomb");
  }

  return {
    current,
    setBomb,
    clearBomb,
  };
});
