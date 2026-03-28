import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  return {
    count,
  };
});

export const useUpgradesStore = defineStore("upgrades", () => {
  const upgradesLog = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [8, 0],
  ]);
  return upgradesLog;
});
