<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useCounterStore } from '../../stores/clickerStore';
import type { WeaponType } from '../../types';
import { useBombStore } from '../../stores/bombStore';

const storeCounter = useCounterStore();
const bombStore = useBombStore()

const { weapon } = defineProps<{
    weapon: WeaponType
}>()
function hidePopUp(click: PointerEvent) {
    const target = click.target as HTMLElement | null;
    if (!target) return;
    if (target.id === "container") {
        weapon.visibility = false;
    }
}
let visibleState = computed(() => {
    return (storeCounter.count >= weapon.unlockAt)? true : false
}); 

let price = ref(Number(weapon.price.replace(/\s/g, "")));

let purchasableStyle = computed(() => {
    return (price.value > storeCounter.count)? 0 : 1
});

let purchasableState = computed(() => {
    return (price.value > storeCounter.count)? false : true
});

function buyUpgrade() {
    if (!visibleState.value) return;
    if (!purchasableState.value) return;
    if (bombStore.current !== null) return
    weapon.amount = weapon.amount + 1; 
    storeCounter.count -= price.value; 
    bombStore.current = weapon  
}

</script>
<template>
    <div v-if="weapon.visibility " id="container" class="container" @click="hidePopUp">
        <section>
            <img :src="weapon.image" alt="">
            <div>
                <h1>{{ weapon.name }}</h1>
                <div class="cost">
                    <img src="/coin.png" alt="game currency coin">
                    <p>{{ weapon.price }}</p>
                </div>
                <p v-if="visibleState" >You have {{ weapon.amount }} pcs of this weapon purchased</p>
                <p v-else> You have to reach {{weapon.unlockAt}} coins to unlock this weapon</p>
            </div>
            <button @click="buyUpgrade">
                Purchase
            </button>
        </section>
    </div>
</template>
<style scoped>
  .container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.841);
    backdrop-filter: blur(5px);
    z-index: 50000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  section{
    background-color: var(--neutral-400);
    padding: 3em 5em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    border-radius: 2em;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.687);
  }
  .cost{
    gap: 0.5rem;
    display: flex;
  }
  .cost img{
    width: 1.5em;
    height: auto;
  }
  button{
    cursor: pointer;
    background-color: var(--primary-900);
    color: var(--neutral-100);
    border: none;
    box-shadow: 0 0 17px 0 var(--primary-500) , inset 0 -4px 13px 0 #B88FFF  ;
    border-radius: 10rem;
    width: 100%;
    padding: 0.5rem 0;
    font-size: 1.6em;
    margin-top: 1em;
    filter: saturate(v-bind(purchasableStyle));

  }
</style>