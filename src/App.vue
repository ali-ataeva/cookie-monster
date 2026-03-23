<script setup lang="ts">
import Clicker from './components/Clicker.vue';
import MainFooter from './components/MainFooter.vue';
import Navbar from './components/Navbar.vue';
import Store from './components/Store.vue';
</script>

<template>
  <body>
    <Navbar/>
    <main>
      <Clicker/>
      <Store/>
    </main>
    <MainFooter/>
  </body>
</template>

<style>

</style>