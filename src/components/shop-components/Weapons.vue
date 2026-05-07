<script lang="ts" setup>
import { ref } from 'vue';
import WeaponCard from './WeaponCard.vue';

let weaponsList = ref([
  { id: 1, name: "Iron Dome", image: "/weapon-1.png", price: "1 000", unlockAt: 0, clicks: 1, amount: 0, visibility: false},
  { id: 2, name: "Little Boy", image: "/weapon-2.png", price: "100 000", unlockAt: 1000, clicks: 2, amount: 0, visibility: false},
  { id: 3, name: "Fat Man", image: "/weapon-3.png", price: "1 000 000", unlockAt: 100000, clicks: 3, amount: 0, visibility: false},
  { id: 4, name: "Tsar Bomba", image: "/weapon-4.png", price: "10 000 000", unlockAt: 1000000, clicks: 5, amount: 0, visibility: false},
  { id: 5, name: "Hydrogen Bomb", image: "/weapon-5.png", price: "100 000 000", unlockAt: 100000000, clicks: 8, amount: 0, visibility: false},
]);

function makeVisible(click: PointerEvent) {
    const target = click.target as HTMLElement | null;
    if (!target) return;
    const weapon = weaponsList.value.find((entry) => entry.id === Number(target.id));
    if (!weapon) return
    weapon.visibility = true;
}

</script>
<template>
    <section class="weapons">
          <p>weapons</p>
          <ul>
            <li v-for="weapon in weaponsList" >
              <div class="click-capture" :id="String(weapon.id)" @click="makeVisible"></div>
              <WeaponCard :weapon/>
              <img :src="weapon.image" alt="">
            </li>
          </ul>
    </section>
</template>
<style scoped>
  li {
    list-style-type: none;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .click-capture{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .shop section{
    background-color: var(--neutral-600);
  }
  li > p{
    color: rgba(255, 255, 255, 0.242);
    font-size: 2em;
  }
  article> section > p{
    background-color: var(--secondary-500);
    width: fit-content;
    padding: 0 8px;
    color: var(--neutral-900);
    font-size: 0.8em;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.687);
  }
  .weapons > p{
    background-color: var(--primary-500);
  }
  .weapons{
    width: 50%;
  }
  .weapons ul{
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1.5rem;
    height: 100%;
    align-items: center;
    padding: 1rem 0;
    padding-bottom: 2.6rem;
  }
  .weapons li{
    display: flex;
    width: 80%;
    background-color: var(--neutral-900);
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    box-shadow: inset 0 0 12px 0 #B88FFF, 0 0 5.5px 0 var(--primary-500);
  }
  .weapons img{
    width: 5rem;
    height: auto;
  }
  @media screen and (max-width: 750px) {
    article{
      height: unset;
    }
  }
</style>