<script setup lang="ts">
import Shop from '../components/Shop.vue';
import Clicker from '../components/Clicker.vue';
import MainFooter from '../components/MainFooter.vue';
import Navbar from '../components/Navbar.vue';

</script>

<template>
  <div class="page">
    <Navbar/>
    <main>
      <Clicker/>
      <Shop/>
    </main>
    <MainFooter/>
  </div>
</template>

<style scoped>
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: 100dvh;
  }
</style>