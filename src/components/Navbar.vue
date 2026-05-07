<script lang="ts" setup>
import { ref } from "vue";

const showInstructions = ref(false);

function hidePopUp(click: PointerEvent) {
    const target = click.target as HTMLElement | null;
    if (!target) return;
    if (target.id === "container") {
        showInstructions.value = false;
    }
}
</script>
<template>
    <nav>
      <h1>Strike</h1>
      <button @click="showInstructions = true">How to play?</button>
    </nav>
    <div v-if="showInstructions" id="container" class="container" @click="hidePopUp">
        <section>
            <h1>The year is 2080</h1>
            <p class="intro">The Third World War left the map in ruins. Borders shifted. Whole nations vanished from the atlas — wiped clean, never to be recharted. What remains is a fractured world held together by coin, smoke, and the steady hands of those who survived.</p>
            <p>You are a <strong>Recruit</strong>. The public doesn't know your name yet, but they will. Climb the ranks from Recruit to <strong>Living Legend</strong>, and the world will remember you.</p>
            <h2>Your orders, soldier:</h2>
            <ol>
                <li><strong>Strike the coin.</strong> Every click fills the war chest. Coin is currency, leverage, survival.</li>
                <li><strong>Invest in upgrades.</strong> The shop trades in better gear — multipliers that turn each strike into a heavier blow.</li>
                <li><strong>Arm a bomb.</strong> Weapons unlock the field. You can only carry one at a time, so choose carefully.</li>
                <li><strong>Drop it on the map.</strong> The geography theater is your proving ground. Some territories are gone - erased by the war - so don't go looking for them. Hit your mark for the bonus.</li>
                <li><strong>Repeat. Rise.</strong> Coin, upgrade, strike. That's how legends are made.</li>
            </ol>
            <button @click="showInstructions = false">
                Understood
            </button>
        </section>
    </div>
</template>
<style scoped>
    nav{
    background-color: var(--neutral-800);
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    box-shadow: 0 0px 8px 0px rgb(0, 0, 0);
    height: 3rem;
  }
  h1{
    font-weight: 500;
  }
  nav button{
    color: var(--neutral-200);
    background-color: var(--neutral-800);
    border: var(--neutral-200) solid 2px;
    padding: 0.25rem 0.5rem;
    height: max-content;
    border-radius: 8px;
    font-size: 0.8rem;
    cursor: pointer;
  }
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
    max-width: 36rem;
    cursor: default;
  }
  section h1{
    margin: 0;
    letter-spacing: 0.05em;
  }
  section h2{
    margin: 0.5em 0 0;
    font-size: 1.1em;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--primary-500);
  }
  .intro{
    font-style: italic;
    line-height: 1.5;
    margin: 0;
    opacity: 0.9;
  }
  section p{
    margin: 0;
    line-height: 1.5;
  }
  ol{
    margin: 0;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  li{
    line-height: 1.5;
  }
  section > button{
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
  }
</style>