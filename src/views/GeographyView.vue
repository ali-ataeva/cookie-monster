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

    if(!geoStore.outlines[i]) return;
    const outlinesCode = geoStore.outlines[i].properties['ISO3166-1-Alpha-2']
    const capital = geoStore.coords.find(a => a.countryCode === outlinesCode)
    
    if(!mapEl.value) return;
    const map = L.map(mapEl.value, {          
        zoomSnap: 1.25,
    } as any).setView([20, 0],2)
  
    if(!country) return;

    L.geoJSON(geoStore.outlines.map(o => o.geometry) as any, {
        style: { color: "gray", fillOpacity: 0.3 }
    }).addTo(map)

    const layer = L.geoJSON(country.geometry, {style: { color: "red", fillOpacity: 0.6 }}).addTo(map)
    map.flyToBounds(layer.getBounds(), { 
        maxZoom: 6,
        duration : 3,
    })
    
    if(!capital) return;
    map.on("click", (e) => {
        const distanceRaw = map.distance(e.latlng, [capital.lat, capital.lng])
        const distance = Math.round(distanceRaw)
        console.log(`Spletla jses o ${distance/1000} km`)
    })
}
)
</script>

<template>
    <div ref="mapEl" class="map"></div>
</template>

<style scoped>
    .map{
        height: 100vh; 
        width: 100%;
    }
</style>