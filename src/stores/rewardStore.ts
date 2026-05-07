import { defineStore } from "pinia";
import { ref } from "vue";

//time stamp and multiplier for reward
export const useRewardStore = defineStore("reward", () => {
  const stored = localStorage.getItem("multiplier");
  const initial = stored ? JSON.parse(stored) : { value: 1, expiresAt: 0 };

  const clickMultiplier = ref(initial.value);
  const expiresAt = ref(initial.expiresAt);

  function setMultiplier(value: number, minutes: number) {
    clickMultiplier.value = value;
    expiresAt.value = Date.now() + minutes * 60 * 1000;
    localStorage.setItem(
      "multiplier",
      JSON.stringify({
        value: value,
        expiresAt: expiresAt.value,
      }),
    );
  }
  return { clickMultiplier, expiresAt, setMultiplier };
});
