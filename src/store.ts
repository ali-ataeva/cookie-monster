import { defineStore } from "pinia";
import { ref } from "vue";

//main clicker count
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  return {
    count,
  };
});
