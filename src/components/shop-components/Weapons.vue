<script lang="ts" setup>

</script>
<template>
    <section class="weapons">
          <p>weapons</p>
          <ul>
            <li>
              <img src="/weapon-1.png" alt="">
            </li>
            <li>
              <img src="/weapon-2.png" alt="">
            </li>
            <li>
              <img src="/weapon-3.png" alt="">
            </li>
            <li>
              <img src="/weapon-4.png" alt="">
            </li>
            <li>
              <img src="/weapon-5.png" alt="">
            </li>
          </ul>
    </section>
</template>
<style scoped>
    li {
    list-style-type: none;
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
    padding: 0.6rem 1.5rem;
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