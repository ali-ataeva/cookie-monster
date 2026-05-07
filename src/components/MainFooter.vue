<script lang="ts" setup>
import { ref } from 'vue';
import { useBombStore } from '../stores/bombStore';
import { useRewardStore } from '../stores/rewardStore';

const bombStore = useBombStore();
const rewardStore = useRewardStore();
const showPopup = ref(false);

function handleClick(e: Event) {
  if (!bombStore.current) {
    e.preventDefault();
    showPopup.value = true;
  }
}

function formatTime(expiresAt: number, now: number) {
  const totalSec = Math.max(0, Math.ceil((expiresAt - now) / 1000));
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  return `${min}:${sec.toString().padStart(2, '0')}`;
}
</script>
<template>
    <footer>
      <section class="won-efficiency">
        <p v-if="rewardStore.activeMultipliers.length === 0" class="empty">
          No active multipliers
        </p>
        <ul v-else class="multipliers">
          <li v-for="m in rewardStore.activeMultipliers" :key="m.expiresAt">
            <span class="value">{{ m.value }}x</span>
            <span class="time">{{ formatTime(m.expiresAt, rewardStore.now) }}</span>
          </li>
        </ul>
      </section>

      <section class="button-wrap">
          <router-link
            :to="{ name: 'geo'}"
            class="button"
            :class="{ disabled: !bombStore.current }"
            @click="handleClick"
          >
            Launch
          </router-link>
      </section>
    </footer>

    <div v-if="showPopup" class="popup-overlay" @click="showPopup = false">
      <div class="popup" @click.stop>
        <p>You need to buy a bomb before you can launch.</p>
        <button @click="showPopup = false">Got it</button>
      </div>
    </div>
</template>
<style scoped>
    footer{
    width: 100%;
    background-color: var(--neutral-800);
    height: 5rem;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer .button{
    background-color: var(--primary-900);
    color: var(--neutral-100);
    border: none;
    box-shadow: 0 0 17px 0 var(--primary-500) , inset 0 -4px 13px 0 #B88FFF  ;
    border-radius: 10rem;
    width: 100%;
    margin: 1.2rem;
    padding: 0.5rem 0;
    font-size: 1.6em;
    text-align: center;
    text-decoration: none;
  }
  footer .button.disabled{
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
    background-color: var(--neutral-700);
  }
  .popup-overlay{
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    z-index: 60000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popup{
    background: var(--neutral-400);
    padding: 2em 3em;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
  .popup button{
    background: var(--primary-900);
    color: var(--neutral-100);
    border: none;
    border-radius: 10rem;
    padding: 0.5em 2em;
    font-size: 1.2em;
    cursor: pointer;
    box-shadow: 0 0 17px 0 var(--primary-500), inset 0 -4px 13px 0 #B88FFF;
  }
  .won-efficiency{
    min-width: 60%;
    padding: 0 1rem;
  }
  .won-efficiency .empty{
    color: rgba(255, 255, 255, 0.4);
    font-style: italic;
  }
  .multipliers{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .multipliers li{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--primary-900);
    padding: 0.3rem 0.8rem;
    border-radius: 10rem;
    box-shadow: inset 0 -3px 8px 0 #B88FFF, 0 0 6px 0 var(--primary-500);
    font-size: 0.95em;
  }
  .multipliers .value{
    font-weight: bold;
    color: var(--neutral-100);
  }
  .multipliers .time{
    color: rgba(255, 255, 255, 0.7);
    font-variant-numeric: tabular-nums;
  }
  .button-wrap{
    width: 100%;
    height: 100%;
    background-color: var(--neutral-600);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1200px) {
  .won-efficiency{
    min-width: 50%;
  }
  }
  @media screen and (max-width: 750px) {
    footer{
      flex-direction: column;
      height: unset;
    }
    .won-efficiency{
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .button-wrap{
      border-top: var(--neutral-400) solid 8px;
    }

  }
</style>