<script setup lang="ts">
import { useGeoDataStore } from '../stores/geoDataStore';
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { onMounted, ref } from 'vue';
import { router } from '../router';

const Purple = "#7a41dc"
const Yellow = "#FFC64A"
const geoStore = useGeoDataStore();
const mapEl = ref<HTMLDivElement>();
const guess = ref<{lat: number, lng: number} | null>(null)
const confirmed = ref(false)
let marker: L.CircleMarker | null = null;
let map: L.Map | null = null;
const capital = ref()
const distance = ref()

const reset = () => {
    if (marker) {
        if (!map) return;
        map.removeLayer(marker)
        marker = null
    }
    guess.value = null
}

const confirm = () => {
    if (!guess.value || !capital.value) return;
    const distanceRaw = map?.distance(
        [guess.value.lat, guess.value.lng],
        [capital.value.lat, capital.value.lng]
    )
    if (!distanceRaw) return;
    distance.value = Math.round(distanceRaw / 1000)
    confirmed.value = true
    localStorage.removeItem("currentCountry")
    //TODO: add function for counting and saving score
}

const redirectToClicker = () => {
    router.push({name : "home"})
}

onMounted (() => {
    let stored = localStorage.getItem("currentCountry")
    let i:number
    if (stored === null) {
        i = Math.floor(Math.random() * geoStore.outlines.length)
        localStorage.setItem("currentCountry", String(i))
    } else {
        i = Number(stored)
    }
    
    const country = geoStore.outlines[i]
    if(!country) return;
    const outlinesCode = country.properties['ISO3166-1-Alpha-2']
    capital.value = geoStore.coords.find(a => a.countryCode === outlinesCode)
    
    if(!mapEl.value) return;
    map = L.map(mapEl.value, {          
        zoomSnap: 1.25,
    } as any).setView([20, 0],2)
  
    if(!country) return;

    L.geoJSON(geoStore.outlines.map(o => o.geometry) as any, {
        style: { color: "gray", fillOpacity: 0.3 }
    }).addTo(map)

    const layer = L.geoJSON(country.geometry, {style: { color: Purple, fillOpacity: 0.6 }}).addTo(map)
    map.flyToBounds(layer.getBounds(), { 
        maxZoom: 6,
        duration : 3,
    })

    if(!capital.value) return;
    map.on("click", (e) => {
        if (confirmed.value) return;
        if (marker) return;
        if (!map) return;
        marker = L.circleMarker(e.latlng, {
            radius : 8,
            color : Yellow,
            fillOpacity : 1,
            weight : 2
        }).addTo(map);
        guess.value = { lat: e.latlng.lat, lng: e.latlng.lng }
    })
}
)
</script>

<template>
    <div ref="mapEl" class="map"></div>

    <section v-if="guess && !confirmed" class="confirm-popup">
        <p>Is this your final answer?</p>
        <section class="button-wrap">
            <button @click="reset" class="reset">
                Try again
            </button>
            <button @click="confirm" class="confirm">
                Confirm
            </button>
        </section>
        
    </section>
    <section v-if="confirmed" class="result">
        <p>You missed by {{ distance }} km</p>
        <button @click="redirectToClicker" class="redirect">Back to clicker</button>
    </section>
</template>

<style scoped>
    .map{
        height: 100vh; 
        width: 100%;
    }
    .confirm-popup, .result {
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: var(--neutral-100);
        color: var(--neutral-900);
        padding: 1rem;
        border-radius: 1rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        z-index: 800; /* Tohle nepsala llmka, kvuli knihovne je potreba mit takhle vysoky z-index :( */
        top: 30px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 40rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
    }
    .button-wrap{
        display: flex;
        gap: 2rem;
    }
    button{
        width: 100%;
        border-radius: 1rem;
        padding: 1rem 1.5rem;
        cursor: pointer;
    }
    .reset, .redirect{
        border: var(--primary-500) 2px solid;
        color: var(--primary-900);
        box-shadow: inset 0 0 12px 0 #B88FFF, 0 0 5.5px 0 var(--primary-500);
    }
    .confirm{
        background-color: var(--primary-500);
        border: var(--primary-700) 2px solid;
        color: var(--neutral-100);
        box-shadow: inset 0 0 12px 0 #B88FFF, 0 0 5.5px 0 var(--primary-500);
    }
    .confirm:hover{
        background-color: var(--primary-700);
    }
</style>