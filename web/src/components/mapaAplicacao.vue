<template>
    <div id="map" class="map"></div>
</template>

<script>
import { onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default {
    setup() {
        const inicializarMapa = () => {
            const map = L.map('map', { zoomControl: false }).setView([-8.0476, -34.8773], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);
        };

        onMounted(() => {
            inicializarMapa();
        });
    },
};
</script>

<style scoped>
.map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
}
</style>