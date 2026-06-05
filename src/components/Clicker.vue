<script lang="ts" setup>
import { computed, ref } from "vue";
import { useCounterStore } from "../stores/clickerStore";
import { useRewardStore } from "../stores/rewardStore";
const coin = ref<string>("./coin.png")

const storeCounter = useCounterStore();
const rewardStore = useRewardStore();
function increaseCount() {
  storeCounter.addCount(rewardStore.totalMultiplier);
}

//Based on counter value assign display a players level
const defaultLevel = { name: "Recruit", icon: "./achievement-cup.png" };
const levels = [
  { min: 500_000_000, name: "Living Legend", icon: "./achievement-cup.png" },
  { min: 250_000_000, name: "Commander", icon: "./achievement-cup.png" },
  { min: 100_000_000, name: "Black Ops Agent", icon: "./achievement-cup.png" },
  { min: 25_000_000, name: "Strike Specialist", icon: "./achievement-cup.png" },
  { min: 2_500_000, name: "Saboteur", icon: "./achievement-cup.png" },
  { min: 100_000, name: "Bombardier", icon: "./achievement-cup.png" },
  { min: 50_000, name: "Demolitionist", icon: "./achievement-cup.png" },
];

const level = computed(() => {
  return levels.find((entry) => storeCounter.count > entry.min) ?? defaultLevel;
});

</script>
<template>
    <article class="clicker">
        <div>
          <img class="achievement-badge" :src="level.icon" alt="">
          <p>{{ level.name }}</p>
        </div>
        <p class="coin-counter">{{ storeCounter.count }} Coins</p>
        <button @click="increaseCount()" class="click-coin">
          <img :src="coin" alt="game currency coin">
        </button>
      </article>
</template>
<style scoped>

    .click-coin{
    width: 22rem;
    height: auto;
    background-color: rgba(255, 255, 255, 0);
    border: rgba(255, 255, 255, 0);
  }
  .clicker{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 60%;
    gap: 1.5rem;
    padding: 1.5rem
  }
  .clicker > div{
    display: flex;
    max-width: max-content;
    gap: 0.5rem;
    font-size: 1.5em;
    justify-content: space-between;
    align-items: center;
    border-bottom: var(--secondary-500) solid 1px;
  }
  img.achievement-badge{
    width: auto;
    height: 1.2em;

  }
  article{
    height: calc(100vh - 8rem);
    height: calc(100dvh - 8rem);
  }
  .coin-counter{
    font-size: 3em;
    word-break: break-all;
    text-align: center;
  }
  @media screen and (max-width: 1200px) {
  .clicker{
    min-width: 50%;
  }
  }
  @media screen and (max-width: 750px) {
    article{
      height: unset;
    }
    .click-coin{
      width: min(18rem, 70vw);
    }
    .clicker{
      padding: 2.5rem 0;
    }
    .coin-counter{
      font-size: 2.2em;
    }

  }
</style>