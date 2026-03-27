<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useCounterStore } from "../counter";
const coin = ref<string>("./coin.png")

const storeCounter = useCounterStore();
function increaseCount() {
  storeCounter.count++;
}
//Based on counter value assign display a players level
const levelsMap = new Map([
  ["Recruit", "./achievement-cup.png"],
  ["Demolitionist", "./achievement-cup.png"],
  ["Saboteur", "./achievement-cup.png"],
  ["Bombardier", "./achievement-cup.png"],
  ["StrikeSpecialist", "./achievement-cup.png"],
  ["BlackOpsAgent", "./achievement-cup.png"],
  ["Commander", "./achievement-cup.png"],
  ["LivingLegend", "./achievement-cup.png"]
]);
let level = ref<string[] | undefined[]>(["Recruit", "./achievement-cup.png"]);

watchEffect(() => {
  if (storeCounter.count > 500000000) {
    level.value[0] = "Living Legend"
    level.value[1] = levelsMap.get("LivingLegend")
  }
  if (storeCounter.count > 250000000) {
    level.value[0] = "Commander"
    level.value[1] = levelsMap.get("Commander")
  }
  if (storeCounter.count > 100000000) {
    level.value[0] = "Black Ops Agent"
    level.value[1] = levelsMap.get("BlackOpsAgent")
  }
  if (storeCounter.count > 25000000) {
    level.value[0] = "Strike Specialist"
    level.value[1] = levelsMap.get("StrikeSpecialist")
  }
  if (storeCounter.count > 100000) {
    level.value[0] = "Bombardier"
    level.value[1] = levelsMap.get("Bombardier")
  }
  if (storeCounter.count > 2500000) {
    level.value[0] = "Saboteur"
    level.value[1] = levelsMap.get("Saboteur")
  }
  if (storeCounter.count > 50000) {
    level.value[0] = "Demolitionist"
    level.value[1] = levelsMap.get("Demolitionist")
  }
});

</script>
<template>
    <article class="clicker">
        <div>
          <img class="achievement-badge" :src="level[1]" alt="">
          <p>{{level[0]}}</p>
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
  }
  .coin-counter{
    font-size: 3em;
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
      width: 18rem;
    }
    .clicker{
      padding: 2.5rem 0;
    }

  }
</style>