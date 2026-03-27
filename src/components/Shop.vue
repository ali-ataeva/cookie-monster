<script lang="ts" setup>
import Upgrades from './shop-components/Upgrades.vue';
import Weapons from './shop-components/Weapons.vue';
</script>
<template>
    <article class="shop">
        <Upgrades/>
        <Weapons/>
      </article>
</template>
<style scoped>
  .shop{
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: space-between;
    background-color: var(--neutral-400);
    z-index: 2;
    box-shadow: -3px 0px 6px 0px rgb(0, 0, 0);
  }
  @media screen and (max-width: 750px) {
    article{
      height: unset;
    }
  }
</style>