import { defineStore } from "pinia";
import { computed, ref } from "vue";

//time stamp and multiplier for reward
export const useRewardStore = defineStore("reward", () => {
  const stored = localStorage.getItem("multipliers");
  const initial = stored ? JSON.parse(stored) : [];
  const multipliers = ref<{ value: number; expiresAt: number }[]>(initial);
  const now = ref(Date.now());

  setInterval(() => {
    now.value = Date.now();
    const before = multipliers.value.length;
    multipliers.value = multipliers.value.filter(
      (m) => m.expiresAt > now.value,
    );
    if (multipliers.value.length !== before) {
      localStorage.setItem("multipliers", JSON.stringify(multipliers.value));
    }
  }, 1000);

  const activeMultipliers = computed(() =>
    multipliers.value.filter((m) => m.expiresAt > now.value),
  );

  const totalMultiplier = computed(() => {
    if (activeMultipliers.value.length === 0) return 1;
    return activeMultipliers.value.reduce(
      (acc, m) => acc + (m.value - 1),
      1,
    );
  });

  function addMultiplier(value: number, minutes: number) {
    multipliers.value.push({
      value: value,
      expiresAt: Date.now() + minutes * 60 * 1000,
    });

    localStorage.setItem("multipliers", JSON.stringify(multipliers.value));
  }

  return { addMultiplier, multipliers, activeMultipliers, totalMultiplier, now };
});
