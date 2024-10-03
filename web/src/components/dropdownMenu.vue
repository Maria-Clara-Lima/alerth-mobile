<!-- Falta terminar -->

<template>
    <div v-if="menuVisivel" class="dropDownMenu">
        <img src="../assets/medal.png" alt="Icone de um troféu que representa uma conquista alcançado no app" class="imagemTrofeu" />
        <!-- <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul> -->
    </div>
</template>

<script>
export default {
    props: {
        menuVisivel: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped>
.dropDownMenu {
    position: absolute;
    top: 60px;
    left: 1px; 
    background-color: white;
    border-radius: 16px;
    z-index: 3;
    padding: 120px;
}

.imagemTrofeu {
    width:100%;
}

/* .dropDownMenu ul {
    list-style: none;
    padding: 0;
    margin: 0;
} */

/* .dropDownMenu li {
    padding: 8px;
} */

/* .dropDownMenu li:hover {
    background-color: #7e2828;
} */
</style>