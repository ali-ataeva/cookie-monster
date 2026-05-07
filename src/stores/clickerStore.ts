import { defineStore } from "pinia";
import { ref } from "vue";

//main clicker count
export const useCounterStore = defineStore("counter", () => {
  const count = ref(10000);

  return {
    count,
  };
});
