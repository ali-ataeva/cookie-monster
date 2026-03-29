<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCounterStore } from '../../store';

const storeCounter = useCounterStore();
const placeholderImage = "/upgrade-placeholder.png"
const placeholderText = "???";

type UpgradeType = { 
  id: number; 
  name: string; 
  image: string; 
  price: string; 
  unlockAt: number; 
  clicks: number; 
  amount: number; 
}

const { upgrade } = defineProps<{
    upgrade: UpgradeType
}>()

const visible = computed(() => {
    return storeCounter.count >= upgrade.unlockAt ? true : false
}); 

let clicks = ref(0);
setInterval(() => 
    {storeCounter.count += clicks.value}, 1000
)

function upgraded() {
    if (!visible){
        return;
    }
    let price = Number(upgrade.price.replace(" ", ""));
    if (price > storeCounter.count) {
        return;
    }
    clicks.value += upgrade.clicks;
    upgrade.amount = upgrade.amount + 1; 
    storeCounter.count -= price;
    
}

//add function for automatic clicking based on the clicks count
</script>
<template>
    <section class="card" @click="upgraded()">
        <div class="main-content" >
            <img :src="(visible ? upgrade.image : placeholderImage)" alt="">
            <div class="name-cost">
                <p>{{ (visible ? upgrade.name : placeholderText) }}</p>
                <div class="cost">
                    <img src="/coin.png" alt="game currency coin">
                    <p>{{(visible ? upgrade.price : placeholderText)}}</p>
                </div>
            </div>
        </div>
        <p class="count">
            {{upgrade.amount}}
        </p>
    </section>
</template>
<style scoped>
    section.card{
    display: flex;
    width: 90%;
    background-color: var(--neutral-900);
    border-radius: 10rem;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 1.5rem;
    box-shadow: inset 0 0 12px 0 #FFDC8F, 0 0 5.5px 0 var(--secondary-500);

  }
  .upgrades img{
    width: 1rem;
    height: auto;
  }
  img.upgrade-img{
    width: 2rem;
    height: fit-content;
  }
  .upgrades{
    width: 100%;
    border-bottom: var(--neutral-400) solid 8px;
  }
  .upgrades div{
    display: flex;
  }
  .name-cost{
    flex-direction: column;
  }
  .cost{
    gap: 0.5rem;
  }
  .cost img{
    width: 1.5em;
    height: auto;
  }
  .count{
    color: rgba(255, 255, 255, 0.242);
    font-size: 2em;
  }
  .upgrades .main-content > img{
    width: 1.5rem;
    height: 2.5rem;
    border: rgba(0, 0, 0, 0);
  }
  .upgrades .main-content{
    gap: 1rem;
    align-items: center;
    width: 100%;
  }
  @media screen and (max-width: 750px) {
    article{
      height: unset;
    }
  }
</style>