<template>
    <div>
        <menuSuperior :menuVisivel="menuVisivel" :alternarMenu="alternarMenu" />
        <dropdownMenu :menuVisivel="menuVisivel" />
        <mapaAplicacao />
        <cardIcone />
    </div>
</template>

<script>
import { ref } from 'vue';
import menuSuperior from '../components/menuSuperior.vue';
import dropdownMenu from '../components/dropdownMenu.vue';
import mapaAplicacao from '../components/mapaAplicacao.vue';
import cardIcone from '../components/cardIcone.vue';

export default {
    name: 'inicial',
    components: {
        menuSuperior,
        dropdownMenu,
        mapaAplicacao,
        cardIcone,
    },
    setup() {
        const menuVisivel = ref(false);

        const alternarMenu = () => {
            menuVisivel.value = !menuVisivel.value;
        };

        return { menuVisivel, alternarMenu };
    },
};
</script>