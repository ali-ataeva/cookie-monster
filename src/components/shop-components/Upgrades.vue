<script lang="ts" setup>
import { ref } from 'vue';
import UpgradeCard from './UpgradeCard.vue';


let upgradesList = ref([
  { id: 1, name: "Cursor", image: "/cursor.png", price: "10", unlockAt: 0, clicks: 0.25, amount: 0},
  { id: 2, name: "Grenade", image: "/upgrade-placeholder.png", price: "500", unlockAt: 0, clicks: 0.50, amount: 0 },
  { id: 3, name: "Sniper", image: "/upgrade-placeholder.png", price: "1 000", unlockAt: 500, clicks: 1, amount: 0 },
  { id: 4, name: "Helicopter", image: "/upgrade-placeholder.png", price: "4 000", unlockAt: 1000, clicks: 4, amount: 0 },
  { id: 5, name: "War Dog", image: "/upgrade-placeholder.png", price: "10 000", unlockAt: 4000, clicks: 8, amount: 0 },
  { id: 6, name: "Hacker", image: "/upgrade-placeholder.png", price: "40 000", unlockAt: 10000, clicks: 20, amount: 0 },
  { id: 7, name: "Bomber Plane", image: "/upgrade-placeholder.png", price: "100 000", unlockAt: 40000, clicks: 50, amount: 0 },
  { id: 8, name: "Drone", image: "/upgrade-placeholder.png", price: "400 000", unlockAt: 100000, clicks: 100, amount: 0 },
  { id: 9, name: "Rocket System", image: "/upgrade-placeholder.png", price: "1 000 000", unlockAt: 400000, clicks: 500, amount: 0 },
  { id: 10, name: "Nuclear Warhead", image: "/upgrade-placeholder.png", price: "10 000 000", unlockAt: 1000000, clicks: 1000, amount: 0 },
]);

const storedAmounts = localStorage.getItem("upgradeAmounts");
if (storedAmounts) {
  const amounts: Record<number, number> = JSON.parse(storedAmounts);
  upgradesList.value.forEach((u) => {
    const saved = amounts[u.id];
    if (saved !== undefined) u.amount = saved;
  });
}

</script>
<template>
  <div class="wrapper">
    <section class="upgrades">
          <p>upgrades</p>
          <ul>
            <li v-for="upgrade in upgradesList">
              <UpgradeCard :upgrade="upgrade" />
            </li>
          </ul>
        </section>
  </div>
</template>
<style scoped>
  .wrapper{
    height: calc(100vh - 8rem - 8px);
    height: calc(100dvh - 8rem - 8px);
    overflow-y: scroll;
    width: 100%;
  }
  li {
    list-style-type: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section{
    background-color: var(--neutral-600);
  }
  .upgrades{
    width: 100%;
  }
  .upgrades ul{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 0;
    gap: 1.4rem;
  }
  
  section > p{
    background-color: var(--secondary-500);
    width: fit-content;
    padding: 0 8px;
    color: var(--neutral-900);
    font-size: 0.8em;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.687);
  }
  @media screen and (max-width: 750px) {
    .wrapper{
      height: unset;
      overflow-y: visible;
    }
  }
</style>