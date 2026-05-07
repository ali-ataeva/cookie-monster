import { defineStore } from "pinia";
import { ref } from "vue";

//main clicker count
export const useCounterStore = defineStore("counter", () => {
  const stored = localStorage.getItem("count");
  const initial = stored ? Number(stored) : 1000;
  const count = ref(initial);

  function addCount(amount: number) {
    count.value += amount;
    localStorage.setItem("count", String(count.value));
  }

  function subtractCount(amount: number) {
    count.value -= amount;
    localStorage.setItem("count", String(count.value));
  }

  function setCount(value: number) {
    count.value = value;
    localStorage.setItem("count", String(value));
  }

  return {
    count,
    addCount,
    subtractCount,
    setCount,
  };
});
