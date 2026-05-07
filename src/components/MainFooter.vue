<script lang="ts" setup>
import { ref } from 'vue';
import { useBombStore } from '../stores/bombStore';

const bombStore = useBombStore();
const showPopup = ref(false);

function handleClick(e: Event) {
  if (!bombStore.current) {
    e.preventDefault();
    showPopup.value = true;
  }
}
</script>
<template>
    <footer>
      <section class="won-efficiency">
        <p>Won efficiency display</p>
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
  }
  .won-efficiency p{
    padding: 0 1rem;
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