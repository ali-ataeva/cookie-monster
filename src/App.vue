<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { getGeoData } from './services/geoData';

onMounted(async () => {
  const geoData = await getGeoData()
})
</script>

<template>
  <RouterView/>
</template>

<style>

</style>