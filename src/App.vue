<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { getGeoData } from './services/geoData';
import { useGeoDataStore } from './stores/geoDataStore';

const geoDataStore = useGeoDataStore()

onMounted(async() => {
  const {finalCoords, finalOutlines, finalCountries} = await getGeoData()
  geoDataStore.coords = finalCoords;
  geoDataStore.outlines = finalOutlines;
  geoDataStore.countries = finalCountries;
})
</script>

<template>
  <RouterView/>
</template>

<style>

</style>