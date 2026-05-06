<script setup lang="ts">
import { useGeoDataStore } from '../stores/geoDataStore';
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { onMounted, ref } from 'vue';

const geoStore = useGeoDataStore();
const mapEl = ref<HTMLDivElement>();

onMounted (() => {
    const i = Math.floor(Math.random() * geoStore.outlines.length)
    const country = geoStore.outlines[i]

    if(!mapEl.value) return;
    const map = L.map(mapEl.value).setView([0,0],2)

    if(!country) return;
    const layer = L.geoJSON(country.geometry).addTo(map)
    map.fitBounds(layer.getBounds())
}
)
</script>

<template>
    <p>Ahoj</p>
    <div ref="mapEl" class="map"></div>
</template>

<style scoped>
    .map{
        height: 500px;
        width: 100%;
    }
</style>